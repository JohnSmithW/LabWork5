function isTimeRangesIntersect(timeRange1, timeRange2) {
  var start1 = timeRange1[0];
  var end1 = timeRange1[1];
  var start2 = timeRange2[0];
  var end2 = timeRange2[1];
  if (typeof start1 === 'string' && start1 !== '' && typeof end1 === 'string' && end1 !== '' && typeof start2 === 'string' && start2 !== '' && typeof end2 === 'string' && end2 !== '') {
    if (start1[0] <= '2' && start1[1] <= '9' && start1[2] === ':' && start1[3] <= '5' && start1[4] <= '9') {
      if (start2[0] <= '2' && start2[1] <= '9' && start2[2] === ':' && start2[3] <= '5' && start2[4] <= '9') {
        if (end1[0] <= '2' && end1[1] <= '9' && end1[2] === ':' && end1[3] <= '5' && end1[4] <= '9') {
          if (end2[0] <= '2' && end2[1] <= '9' && end2[2] === ':' && end2[3] <= '5' && end2[4] <= '9') {
            return (start1 <= end2 && start2 <= end1) ? true : false;
          } else {
            return false;
          }
        }
      }
    }
  }
}
