# Network monitoring — public project plan

Marios & Donovan · ITMOS · BCLC2 · 22 October 2026

Status: planning only. Installation and every test below are still pending.
This is a public summary of our working plan. School hostnames, addresses,
credentials and management details are omitted.

## Scope

- Two standalone Proxmox hosts.
- A proposed Zabbix server, database and web interface on a CyberLab VM.
- A disposable Linux VM running a test web service.
- An available SNMP target, subject to inventory and access checks.

## What the monitoring should tell us

| Layer | Planned observation | Why it matters |
| --- | --- | --- |
| Hypervisor | ICMP reachability and Proxmox API metrics | Host health and collection status |
| Guest | CPU, memory and filesystem usage | Hypervisor metrics do not describe every guest condition |
| Application | HTTP response and expected page content | A reachable host can still have a broken service |
| Monitoring system | Collector health and data freshness | Stale data must not look healthy |

## Planned evidence

1. Inventory actual resources and confirm connectivity.
2. Add a host and show its first valid metric.
3. Stop the disposable web service and verify a problem notification.
4. Restore the service and verify recovery and its notification.
5. Record the operator, change, timestamps, screenshots and actual result.

Additional planned checks cover VM loss, bounded CPU load, a disposable disk
threshold test, an SNMP metric and notification receipt by both teammates.
None of these tests has been executed in the current evidence workbook.

## Next milestone

Verify the inventory and access, then install the first monitoring VM.
