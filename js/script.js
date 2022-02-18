var html = "";
var response = {
  length: 8,
  done: 3,
  data: [
    {
      id: 1,
      name: "Workout 1",
      badgeFlag: 0,
      badgeName: null,
    },
    {
      id: 2,
      name: "Workout 2",
      badgeFlag: 0,
      badgeName: null,
    },
    {
      id: 3,
      name: "Workout 3",
      badgeFlag: 0,
      badgeName: null,
    },
    {
      id: 4,
      name: "Workout 4",
      badgeFlag: 1,
      badgeName: "INTERMIDEATE",
    },
    {
      id: 5,
      name: "Workout 5",
      badgeFlag: 0,
      badgeName: null,
    },
    {
      id: 6,
      name: "Workout 6",
      badgeFlag: 1,
      badgeName: "EXPERT",
    },
    {
      id: 7,
      name: "Workout 7",
      badgeFlag: 0,
      badgeName: null,
    },
    {
      id: 8,
      name: "Workout 8",
      badgeFlag: 0,
      badgeName: null,
    },
  ],
};

for (var i = 0; i < response.length; i++) {
  var name = response.data[i].name;
  var bFlag = response.data[i].badgeFlag;
  var bName = response.data[i].badgeName;
  if (i <= 1) {
    html += "<div class='w-out wo-green location-mark'>" + name + "</div>";
  } else if (bFlag == 1 && bName == "INTERMIDEATE") {
    html += "<div class='w-out int'>" + name + "</div>";
  } else if (bFlag == 1 && bName == "EXPERT") {
    html += "<div class='w-out exp'>" + name + "</div>";
  }
  html += "<div class='w-out'>" + name + "</div>";
}
var root = document.getElementById("root");
root.innerHTML = html;
