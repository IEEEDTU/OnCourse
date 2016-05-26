var app = angular.module('result', []);

// Result Panel Controller
app.controller('resultPanelCtrl', function($scope){
  $scope.scores = [{
    courseCode: "SE301",
    sessMarks: "27",
    sessMaxMarks: "30",
    endMarks: "59",
    endMaxMarks: "70",
    marksObtained: "86",
    maxMarks: "100",
    creditsGained: "4",
    credits: "4"
  },
  {
    courseCode: "SE301",
    sessMarks: "27",
    sessMaxMarks: "30",
    endMarks: "59",
    endMaxMarks: "70",
    marksObtained: "86",
    maxMarks: "100",
    creditsGained: "4",
    credits: "4"
  },
  {
    courseCode: "SE301",
    sessMarks: "27",
    sessMaxMarks: "30",
    endMarks: "59",
    endMaxMarks: "70",
    marksObtained: "86",
    maxMarks: "100",
    creditsGained: "4",
    credits: "4"
  },
  {
    courseCode: "SE301",
    sessMarks: "27",
    sessMaxMarks: "30",
    endMarks: "59",
    endMaxMarks: "70",
    marksObtained: "86",
    maxMarks: "100",
    creditsGained: "4",
    credits: "4"
  },
  {
    courseCode: "SE301",
    sessMarks: "27",
    sessMaxMarks: "30",
    endMarks: "59",
    endMaxMarks: "70",
    marksObtained: "86",
    maxMarks: "100",
    creditsGained: "4",
    credits: "4"
  },
  {
    courseCode: "SE301",
    sessMarks: "27",
    sessMaxMarks: "30",
    endMarks: "59",
    endMaxMarks: "70",
    marksObtained: "86",
    maxMarks: "100",
    creditsGained: "4",
    credits: "4"
  },
  {
    courseCode: "SE301",
    sessMarks: "27",
    sessMaxMarks: "30",
    endMarks: "59",
    endMaxMarks: "70",
    marksObtained: "86",
    maxMarks: "100",
    creditsGained: "4",
    credits: "4"
  },
  {
    courseCode: "SE301",
    sessMarks: "27",
    sessMaxMarks: "30",
    endMarks: "59",
    endMaxMarks: "70",
    marksObtained: "86",
    maxMarks: "100",
    creditsGained: "4",
    credits: "4"
  },
  {
    courseCode: "SE301",
    sessMarks: "27",
    sessMaxMarks: "30",
    endMarks: "59",
    endMaxMarks: "70",
    marksObtained: "86",
    maxMarks: "100",
    creditsGained: "4",
    credits: "4"
  },
  {
    courseCode: "SE301",
    sessMarks: "27",
    sessMaxMarks: "30",
    endMarks: "59",
    endMaxMarks: "70",
    marksObtained: "86",
    maxMarks: "100",
    creditsGained: "4",
    credits: "4"
  }];

  $scope.result = {
    semester: "3",
    totalMarks: "771",
    totalCredits: "30",
    totalSessMarks: calculateTotal($scope.scores, "sessMarks"),
    totalEndMarks: calculateTotal($scope.scores, "endMarks"),
    totalSessMaxMarks: calculateTotal($scope.scores, "sessMaxMarks"),
    totalEndMaxMarks: calculateTotal($scope.scores, "endMaxMarks"),
    totalMaxMarks: calculateTotal($scope.scores, "maxMarks"),
    totalMaxCredits: calculateTotal($scope.scores, "credits"),
    spi: "71.68",
  };
});

function calculateTotal(data, parameter)
{
  var sum = 0;
  for(var i=0;i<data.length;i++)
    sum += parseInt(data[i][parameter]);
  return sum;
}
