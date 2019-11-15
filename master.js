function show(call) {
    switch (call) {
      case "mission":
        document.getElementById('textblock').textContent = "This is our Mission.";
        document.getElementById('mission').classList.add("btn-active");
        document.getElementById('info').classList.remove("btn-active");
        break;
      case "info":
        document.getElementById('textblock').textContent = "This is our Info."
        document.getElementById('info').classList.add("btn-active");
        document.getElementById('mission').classList.remove("btn-active");
        break;
    }
}
