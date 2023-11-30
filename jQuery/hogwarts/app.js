$(() => {
  const $container = $("#container");
  console.log($container);
  const $h1 = $("<h1>");
  $h1.text("Hogwarts");
  $container.append($h1);
  const $h2 = $("<h2>");
  $h2.text("Hojoon Kim");
  $container.append($h2);
  const $h3 = $("<h3>");
  $h3.text("Griffindor");
  $container.append($h3);
  const $h4a = $("<h4>");
  $h4a.attr("class", "dohg");
  $h4a.text("Sir Nimbus Doodlesdorgf Flufferton III");
  $container.append($h4a);
  const $h4b = $("<h4>");
  $h4b.text("Phoenix Feather");
  $container.append($h4b);

  const $ul = $("<ul>");
  $ul.attr("storage", "trunk");
  $container.append($ul);
  const $li1 = $("<li>").text("butter beer");
  $ul.append($li1);
  const $li2 = $("<li>").text("invisibility cloak").attr("class", "secret");
  $ul.append($li2);
  const $li3 = $("<li>").text("magic map").attr("class", "secret");
  $ul.append($li3);
  const $li4 = $("<li>").text("time turner").attr("class", "secret");
  $ul.append($li4);
  const $li5 = $("<li>").text("leash").attr("class", "dohg");
  $ul.append($li5);
  const $li6 = $("<li>").text("Bertie Bott's Every Flavor [Jelly] Beans.");
  $ul.append($li6);

  const $h5 = $("<h5>").text("Spring 2017");
  $container.append($h5);
  const $table = $("<table>");
  $container.append($table);
  const $thead = $("<thead>");
  $table.append($thead);
  const $thDay = $("<th>").text("Day");
  $thead.append($thDay);
  const $thClasses = $("<th>").text("Classes");
  $thead.append($thClasses);

  const $tr1 = $("<tr>");
  $table.append($tr1);
  const $tdMonday = $("<td>").text("Monday");
  $tr1.append($tdMonday);
  const $tdDivination = $("<td>").text("Divination");
  $tr1.append($tdDivination);

  const $tr2 = $("<tr>");
  $table.append($tr2);
  const $tdTuesday = $("<td>").text("Tuesday");
  $tr2.append($tdTuesday);
  const $tdHistory = $("<td>").text("History of Magic");
  $tr2.append($tdHistory);

  const $tr3 = $("<tr>");
  $table.append($tr3);
  const $tdWednesday = $("<td>").text("Wednesday");
  $tr3.append($tdWednesday);
  const $tdCharms = $("<td>").text("Charms");
  $tr3.append($tdCharms);

  const $tr4 = $("<tr>");
  $table.append($tr4);
  const $tdThursday = $("<td>").text("Thursday");
  $tr4.append($tdThursday);
  const $tdPotions = $("<td>").text("Potions");
  $tr4.append($tdPotions);

  const $tr5 = $("<tr>");
  $table.append($tr5);
  const $tdFriday = $("<td>").text("Friday");
  $tr5.append($tdFriday);
  const $tdHerb = $("<td>").text("Herbology");
  $tr5.append($tdHerb);

  $h4b.remove();
  $li1.remove();
  $h4b.text("Some Wand").css("color", "indigo");
  $h4b.insertAfter($h4a);
  $h4a.insertBefore($h1);
  $h4a.remove();
  $h4a.insertAfter($h3);

  $(".secret").hide().delay(2000).show(0);

  $li5.addClass("cabbage");
  $li5.removeClass("cabbage");

  $h5.text("Fall 2018");
  $ul.prepend($li1);
  $ul.attr("storage", "chest");
});
