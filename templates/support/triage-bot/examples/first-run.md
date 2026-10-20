# Example first run — Support Triage Bot

## Support Ticket Cluster Triage — 14:00 UTC

**Ticket Cluster Identified**
- Symptom: Webhook delivery returning HTTP 401 unauthorized.
- Cluster Size: 7 tickets in past 25 minutes.
- Telemetry Check: Sentry spike detected on `WebhookVerificationMiddleware`.

**Reproduction Proof**
- Command: `curl -I -H "X-Signature: invalid" https://api.service/webhook`
- Result: Confirmed signature timestamp drift after UTC rollover.

**Customer Reply Draft**
- Empathetic acknowledgment staged; work-around signature documentation cited.
