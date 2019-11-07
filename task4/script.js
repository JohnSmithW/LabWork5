function isTimeRangesIntersect(timeRange1, timeRange2) {
  var start1 = timeRange1;
  var end1 = timeRange1;
  var start2 = timeRange2;
  var end2 = timeRange2;
  return (start1 <= end2 && start2 <= end1) ? true : false;
}