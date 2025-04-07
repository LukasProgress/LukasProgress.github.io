function showEmail() {
    var user = "probst404";
    var domain = "gmail.com";
    var email = user + "@" + domain;
    return "mailto:" + email;
}

async function loadVisitors() {
    const apiUrl = "https://im1ybb28c0.execute-api.eu-central-1.amazonaws.com/visits";
    const alreadyVisited = sessionStorage.getItem("visited");
    const method = alreadyVisited ? "GET" : "POST";
    try {
      const response = await fetch(apiUrl, {
        method,
      });
  
      if (!response.ok) {
        throw new Error(`API returned status ${response.status}`);
      }
      const data = await response.json();
  
      // Update UI
      document.getElementById("total").textContent = `${data.total}👤`;
      document.getElementById("weekly").textContent = `(${data.weekly}👤 this week)`;

  
      // Store session flag
      if (!alreadyVisited) {
        sessionStorage.setItem("visited", "true");
      }
  
    } catch (err) {
      console.error("Visitor API call failed:", err);
    }
  }
  