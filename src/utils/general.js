export function truncateSummary(content) {
    return content.slice(0, 200).trimEnd();
  }

export  function reformatDate(fullDate) {
    const date = new Date(fullDate)
    return date.toDateString().slice(4);
}