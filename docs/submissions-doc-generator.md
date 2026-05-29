# Dance Residency Submissions Doc Generator

A Google Apps Script that reads the Dance Residency Applications spreadsheet and produces a formatted Google Doc — one section per applicant, with a clickable index at the top.

The script lives on Google Drive under the **amrita@nrityagram.org** account, in a project named **Create Vihara Submissions Doc**.

---

## How to run

1. Open [script.google.com](https://script.google.com) signed in as amrita@nrityagram.org and open the **Create Vihara Submissions Doc** project.
2. Select `createSubmissionsDoc` from the function dropdown and click **Run**.
3. On first run, approve the permission prompts (Drive, Docs, Sheets).
4. When the execution log shows `Done. Open: https://...`, click the link.

No advanced services are required.

---

## What it produces

The script creates a Google Doc named **Dance Residency Submissions Aug-Sept 2026** inside the **Dance Residency Submissions** folder in My Drive (the folder is created automatically if it doesn't exist).

### Document structure

**Page 1 — Index**
- Heading: *List of Submissions*
- Each applicant's name as a hyperlink that jumps to their section

**Pages 2 onwards — one page per applicant**

Each applicant section is structured as follows:

| Block | Columns | Formatting |
|---|---|---|
| Name | col 1 | Heading 1, starts on a new page |
| Bio details | cols 2–8 (Age → Phone) | Red bold label, black value; Email is a `mailto:` link |
| *(1 blank line)* | | |
| Resume Link | col 15 | Red bold label, URL hyperlink |
| Work Samples | col 16 | Red bold label, URL hyperlink |
| *(2 blank lines)* | | |
| Q&A questions | cols 9–14 | Question as Heading 2; answer as normal text below |
| *(2 blank lines between each Q&A pair)* | | |
| *(2 blank lines)* | | |
| Residency Format | col 17 | Red bold label, black value |
| *(2 blank lines)* | | |
| Availability | col 18 | Red bold label, black value |
| *(2 blank lines)* | | |
| Additional Info | col 19 | Red bold label, black normal-weight value |

Columns omitted: Timestamp (col 0), Name duplicate (col 1 shown as H1 only), Status (col 20).

---

## Deduplication

Before generating the doc the script deduplicates rows by **email + phone number**. If the same applicant submitted more than once, only the most recent submission is used. Order of first appearance is preserved.

---

## Spreadsheet columns reference

| Col | Header | Notes |
|-----|--------|-------|
| 0 | Timestamp | Omitted |
| 1 | Name | H1 heading |
| 2 | Age | Bio |
| 3 | City/Country | Bio |
| 4 | Dance Form | Bio |
| 5 | Yrs Training | Bio |
| 6 | Occupation | Bio |
| 7 | Email | Bio, `mailto:` link |
| 8 | Phone | Bio |
| 9 | Relationship to Dance | Q&A |
| 10 | Why Applying | Q&A |
| 11 | Use of Time | Q&A |
| 12 | Self-Directed | Q&A |
| 13 | Supports/Conditions | Q&A |
| 14 | Training Journey/Bio | Q&A |
| 15 | Resume Link | URL hyperlink |
| 16 | Work Samples | URL hyperlink |
| 17 | Residency Format | Practical |
| 18 | Availability Aug-Sept 2026 | Practical |
| 19 | Additional Info | Practical, normal weight |
| 20 | Status | Omitted |

---

## Config values (top of script)

| Constant | Purpose |
|----------|---------|
| `SPREADSHEET_ID` | ID of the Dance Residency Applications sheet |
| `FOLDER_NAME` | Destination Drive folder (`Dance Residency Submissions`) |
| `DOC_NAME` | Name of the output Google Doc |
| `RED` | Label colour (`#CC0000`) |

To run this for a future residency cycle, update `DOC_NAME` and confirm `SPREADSHEET_ID` still points to the correct sheet.

---

## Known limitations

- **Google Docs tabs**: Apps Script has no API to create named tabs programmatically. The index+bookmark approach is used instead — clicking a name in the index jumps to that applicant's section via a `#bookmark=` anchor link.
- **Running again creates a new doc**: the script always creates a fresh document. Delete or archive the old one before re-running if you don't want duplicates in the folder.
