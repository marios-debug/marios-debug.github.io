# AWS security-group lab — evidence summary

Marios M. Sarkis · BCLC2 · 2026–2027

Based on my completed `AWS Lab01-Marios.docx` report in CLOSO1/SPAMA.
This public summary omits addresses, keys and account details. It is a summary
of recorded coursework, not a fresh test of a running environment.

## Setup recorded in the report

- Two EC2 instances using Amazon Linux.
- SSH access from PowerShell.
- An Apache page on TCP port 8080 on the first instance.
- A security-group rule permitting that port from the second instance's private address.

## Recorded checks

| Step | Change / check | Recorded result |
| --- | --- | --- |
| Allow | curl from the second instance to the first instance's private web address | The custom page was returned |
| Block | Remove the TCP 8080 rule and repeat the request | The request timed out |
| Restore | Add the rule again | Communication restored |

## What I learned

Public and private addresses serve different purposes. Checking the AWS console
and the terminal prompt helped me fix tests aimed at the wrong address or host.
The blocked request demonstrated the effect of the security-group rule; it was
not a firewall bypass. Next time I would retain timestamped command output.
