function isTimeRangesIntersect(timeRange1, timeRange2) {
  var start1 = timeRange1[0];
  var end1 = timeRange1[1];
  var start2 = timeRange2[0];
  var end2 = timeRange2[1];
  if (typeof start1 === 'string' && start1 !== '' && typeof end1 === 'string' && end1 !== '' && typeof start2 === 'string' && start2 !== '' && typeof end2 === 'string' && end2 !== '') {
      return (start1 <= end2 && start2 <= end1) ? true : false;
    } else { return false; }
  }
}
