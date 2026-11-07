# MySQL + Docker Compose — evidence summary

Marios M. Sarkis · BCLC2 · 2026–2027

Based on my answers in the first MySQL database worksheet in CLOPR1.
The teacher's worksheet is not republished here. These are the recorded results,
not tests rerun during the portfolio update.

## Work recorded

- A Compose stack containing MySQL and phpMyAdmin.
- A customer table with an auto-incrementing integer primary key.
- Four inserted rows, using both the interface and SQL.
- A unique email column and required customer-name field.

## Recorded checks

| Check | Result in the worksheet |
| --- | --- |
| Insert an existing primary key | Duplicate-key rejection (#1062) |
| Insert a null customer name | NOT NULL rejection (#1048) |
| Reuse an email address | Unique-key rejection (#1062) |
| Recreate the containers without deleting the volume | The four rows and their keys remained |

The worksheet also records a length-limit error (#1406), but its supplied test
string appears shorter than VARCHAR(80). That particular result needs rechecking
with a value genuinely longer than 80 characters; it is not treated as verified.

## Takeaway

A stable primary key and a changeable unique email are different things.
The named volume keeps database state separate from the container lifecycle.
