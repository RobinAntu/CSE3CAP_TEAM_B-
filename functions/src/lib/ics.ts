export function buildICS(events) {
  const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0'];
  for (const evt of events) {
    lines.push('BEGIN:VEVENT');
    if (evt.summary) lines.push(`SUMMARY:${evt.summary}`);
    if (evt.start) lines.push(`DTSTART:${evt.start}`);
    if (evt.end) lines.push(`DTEND:${evt.end}`);
    lines.push('END:VEVENT');
  }
  lines.push('END:VCALENDAR');
  return lines.join('\r\n');
}
