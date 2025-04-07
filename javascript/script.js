function showEmail() {
    var user = "probst404";
    var domain = "gmail.com";
    var email = user + "@" + domain;
    return "mailto:" + email;
}

async function loadVisitors() {
    const apiUrl = "https://im1ybb28c0.execute-api.eu-central-1.amazonaws.com/visits";
    const cooldownMinutes = 30;

    const lastVisit = localStorage.getItem("lastVisit");
    const now = new Date().getTime();
    let method = "GET";

    if (!lastVisit || now - parseInt(lastVisit, 10) > cooldownMinutes * 60 * 1000) {
      method = "POST";
    }

    try {
      const response = await fetch(apiUrl, { method });

      if (!response.ok) {
        throw new Error(`API returned ${response.status}`);
      }

      const data = await response.json();
        // Update UI
        document.getElementById("total").textContent = `${data.total}👤`;
        document.getElementById("weekly").textContent = `(${data.weekly}👤 this week)`;

    
        // Store session flag
        if (method === "POST") {
          localStorage.setItem("lastVisit", now.toString());
        }
    
      } catch (err) {
        console.error("Visitor API call failed:", err);
      }
    }
  
window.addEventListener('DOMContentLoaded', loadVisitors);