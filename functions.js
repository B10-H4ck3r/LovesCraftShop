// Start Home Button Hide/Show Div Element Function //
function hmeButton()
{
  var h = document.getElementById("hme_div");
  if (h.style.display === "none")
  {
    h.style.display = "block";
    document.getElementById("car_freshie_div").style.display = "none";
    document.getElementById("crochet_div").style.display = "none";
  }
  else
  {
    h.style.display = "none";
    document.getElementById("car_freshie_div").style.display = "block";
  }
}
// End Home Button Hide/Show Div Element Function //

// Start Car Freshie Hide/Show Div Element Function //
function cfsButton()
{
  var cf = document.getElementById("car_freshie_div");
  if (cf.style.display === "none")
  {
    cf.style.display = "block";
    document.getElementById("hme_div").style.display = "none";
    document.getElementById("crochet_div").style.display = "none";
  }
  else
  {
    cf.style.display = "none";
    document.getElementById("hme_div").style.display = "block";
  }
}
// End Car Freshie Hide/Show Div Element Function //

// Start Crochet Hide/Show Div Element Function //
function crtButton()
{
  var cr = document.getElementById("crochet_div");
  if (cr.style.display === "none")
  {
    cr.style.display = "block";
    document.getElementById("car_freshie_div").style.display = "none";
    document.getElementById("hme_div").style.display = "none";
  }
  else
  {
    cr.style.display = "none";
    document.getElementById("hme_div").style.display = "block";
  }
}
// End Crochet Hide/Show Div Element Function

// Start Car Freshie Inventory Hide/Show Div Element Function //
function invButton()
{
  var inv = document.getElementById("car_freshie_inventory_div");
  if (inv.style.display === "none")
  {
    inv.style.display = "block";
    document.getElementById("car_freshie_customiz_div").style.display = "none";
  }
  else
  {
    inv.style.display = "none";
    document.getElementById("car_freshie_customiz_div").style.display = "block";
  }
}
// End Car Freshie Inventory Hide/Show Div Element Function //

// Start Car Freshie Custom Order Hide/Show Div Element Function //
function cstButton()
{
  var cst = document.getElementById("car_freshie_customiz_div");
  if (cst.style.display === "none")
  {
    cst.style.display = "block";
    document.getElementById("car_freshie_inventory_div").style.display = "none";
  }
  else
  {
    cst.style.display = "none";
    document.getElementById("car_freshie_inventory_div").style.display = "block";
  }
}
// End Car Freshie Custom Order Hide/Show Div Element Function //

// Start Crochet Inventory Hide/Show Div Element Function //
function crochetInventoryButton()
{
  var ci = document.getElementById("crochetInventory_Div");
  if (ci.style.display === "none")
  {
    ci.style.display = "block";
    document.getElementById("crochetCustomized_Div").style.display = "none";
  }
  else
  {
    ci.style.display = "none";
    document.getElementById("crochetCustomized_Div").style.display = "block";
  }
}
// End Crochet Inventory Hide/Show Div Element Function //

// Start Crochet Customize Hide/Show Div Element Function //
function crochetCustomizeButton()
{
  var cc = document.getElementById("crochetCustomized_Div");
  if (cc.style.display === "none")
  {
    cc.style.display = "block";
    document.getElementById("crochetInventory_Div").style.display = "none";
  }
  else
  {
    cc. style.display = "none";
    document.getElementById("crochetInventory_Div").style.display = "block";
  }
}
