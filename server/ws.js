ws = new WebSocket("ws://cho0h5.iptime.org:8080/ws"); // Todo: 호스트이름 자동 변경으로

ws.onopen = (event) => {
  let data = { event: "enter" }; // Todo: 식별기능 추가(id)
  ws.send(JSON.stringify(data));
};

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);

  updateDashboard(data);
  updateHeader(data);
};

function requestRecentData(n) {
  const query = { event: "recentData", n: n };
  ws.send(JSON.stringify(query));
}
