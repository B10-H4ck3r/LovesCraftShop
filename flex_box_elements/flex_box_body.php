<article class="main">

  <!-- Start Main Body Div Element -->
  <div id="hme_div" style="display: block">
    <p class="hme_txt">
      Welcome to Love's Crafts Shop!<br/>
      <br/>
      Everything you see on this website is special as it is <strong>ALL</strong> <i><b>Handmade</b></i>
      by <a href="https://www.facebook.com/khristane.love" target="_blank">Khristane R. Love</a>! <br/>
      <br/>
      From customized Car Freshies to help boost your car's smell, to creating amazing crochet props
      you can use in your next photoshoot! Khristane is an amazing and talented individual in which
      only aims to create amazing art for you to enjoy for a long time!
    </p>
  </div>
  <!-- End Main Body Div Element -->

  <!-- Start Car Freshie Div Element -->
  <div id="car_freshie_div" style="display: none">
    <p class="car_freshie_txt">
      Please enjoy our wide selection of Car Freshies, or have one <strong>Built-To-Order</strong>!
    </p>
    <table border="0" align="center">
      <tr>
        <td>
          <button type="button" class="btn" onclick="invButton()">Inventory!</button>
        </td>
        <td>
          <button type="button" class="btn" onclick="cstButton()">Custom Order!</button>
        </td>
      </tr>
    </table>

    <!-- Start Inventory Ordering -->
    <div id="car_freshie_inventory_div" style="display: none">
      <p>
        Here is what we have in stock!
      </p>
      <?php
        include('flex_box_elements/flex_car_freshie_inventory.php');
      ?>
    </div>
    <!-- End Inventory Ordering -->

    <!-- Start Customized Ordering -->
    <div id="car_freshie_customiz_div" style="display: none">
      <p>
        Customize Your own Car Freshie!
      </p>
      <?php
        include('flex_box_elements/flex_car_freshie_custom.php');
      ?>
    </div>
    <!-- End Customized Ordering -->
  </div>
  <!-- End Car Freshie Div Element -->

  <!-- Start Crochet Div Element -->
  <div id="crochet_div" style="display: none">
    <p class="car_freshie_txt">
      We have some of the most amazing Crochet items ranging from blankets, to props, and even knick-knacks!
    </p>
    <table border="0" align="center">
      <tr>
        <td>
          <button type="button" class="btn" onclick="crochetInventoryButton()">Inventory!</button>
        </td>
        <td>
          <button type="button" class="btn" onclick="crochetCustomizeButton()">Custom Order!</button>
        </td>
      </tr>
    </table>

    <!-- Start Crochet Inventory Div Element -->
    <div id="crochetInventory_Div" style="display: none">
      <p>
        Here is what we have in stock!
      </p>
      <?php
        include('flex_box_elements/flex_crochet_inventory.php');
      ?>
    </div>
    <!-- End Crochet Inventory Div Element -->

    <!-- Start Crochet Customized Div Element -->
    <div id="crochetCustomized_Div" style="display: none">
      <p>
        Customize Your Crochet Items!
      </p>
      <?php
        include('flex_box_elements/flex_crochet_cusomtize.php');
      ?>
    </div>
    <!-- End Crochet Customized Div Element -->
  </div>
  <!-- End Crochet Div Element -->
</article>
