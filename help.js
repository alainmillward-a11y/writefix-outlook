// Show the full manifest address for wherever these files are published.
document.getElementById("manifest-url").textContent = new URL("manifest.xml", location.href).href;
