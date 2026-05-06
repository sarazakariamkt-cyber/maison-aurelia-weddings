const SHEET_NAME = "Lead Maison Aurelia";
const HEADERS = [
  "submitted_at",
  "brand",
  "source",
  "page_url",
  "referrer",
  "user_agent",
  "periodo",
  "data",
  "budget",
  "invitati",
  "location",
  "zona",
  "nome",
  "contatto",
  "messaggio"
];

function doPost(e) {
  const sheet = getOrCreateSheet();
  const payload = JSON.parse(e.postData.contents || "{}");
  const row = HEADERS.map((key) => payload[key] || "");
  sheet.appendRow(row);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getOrCreateSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  }

  return sheet;
}
