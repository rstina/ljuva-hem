<?php
  require_once 'header.php';
?>

<section class="hero">
  <form action="" name="search">
    <input type="text" class="form__input" placeholder="Skriv område eller adress"><br><br>
      <button class="form__button form__button--active" id="all-btn">Alla typer</button>
      <button class="form__button" id="flat-btn">Lägenheter</button>
      <button class="form__button" id="house-btn">Villor</button>
      <button class="form__button" id="townhouse-btn">Radhus</button>
      <button class="form__button" id="country-btn">Fritidshus</button>
      <button class="form__button" id="other-btn">Övrigt</button><br><br>
      <div id="more-options">
        <table>
          <thead>
            <th>Antal rum</th>
            <th>Boarea</th>
            <th>Högsta pris</th>
          </thead>
          <tr>
            <td>
              <select name="" id="rooms">
                <option value="0">Alla</option>
              </select>
            </td>
            <td>
              <select name="" id="area">
                <option value="0">Alla</option>
              </select>
            </td>
            <td>
              <select name="" id="price">
                <option value="0">Inget</option>
              </select>
            </td>
          </tr>
        </table>
      </div>
    <br>
    <button type="submit" class="form__submit_btn">Hitta bostäder till salu</button>
    <button class="form__reset_btn">Nollställ</button>  
  </form>  
</section>

<section id="picSection"></section> 

<section id="addSection"></section> 

<script src="js/display_products.js"></script>
<script src="js/form_products.js"></script>

<?php
  require_once 'footer.php';
?>