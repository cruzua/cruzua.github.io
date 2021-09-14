<?php
// Configuration
if (is_file('textpattern/config.php')) { require_once('textpattern/config.php'); }
//
$mysqli = new mysqli($txpcfg['host'], $txpcfg['user'], $txpcfg['pass'], $txpcfg['db']);
if($mysqli->connect_error) { exit('Could not connect'); }
$mysqli->set_charset("utf8mb4");
$sql = 'SELECT * FROM poi WHERE poi_id = "'.$_GET["q"].'"';
$result = mysqli_query($mysqli, $sql);
$row = mysqli_fetch_array($result);

//printf("Поточний набір символів: %s\n", $mysqli->character_set_name());
//echo $row['poi_name'];

if ($row['wiki_photo'] !=='') {
	$urlwikimedia = 'https://upload.wikimedia.org/wikipedia/commons/';
	$array_wiki_photo = explode(',', $row['wiki_photo']);
	$count_wiki_photo = count($array_wiki_photo);
  $tabs_links_a = '<button class="tablinks w3-theme-d2" onclick="openTab(\'tab-a\')">фото</button>';
	$div_tab_a = '<div id="tab-a" class="tabcontent"><a href="' . $urlwikimedia . trim($array_wiki_photo[0]) . '" title="Yurii-mr, CC BY-SA 4.0 &amp;lt;https://creativecommons.org/licenses/by-sa/4.0&amp;gt;, через Вікісховище" target="_blank"><img src="' . $urlwikimedia . 'thumb/' .  trim($array_wiki_photo[0]) . '/256px-' .  substr(trim($array_wiki_photo[0]), 5) . '" width="auto" height="auto" alt="' .  substr(trim($array_wiki_photo[0]), 5) . '"></a></div>';
	if ($count_wiki_photo > 1) {
		$tabs_links_d = '<button class="tablinks" onclick="openTab(\'tab-d\')">фото +</button>';
		$div_tab_d = '<div id="tab-d" class="tabcontent" style="display: none">';
		for ($i = 1; $i < $count_wiki_photo; $i++) {
				$div_tab_d .= '<a href="' . $urlwikimedia . trim($array_wiki_photo[$i]) . '" title="Yurii-mr, CC BY-SA 4.0 &amp;lt;https://creativecommons.org/licenses/by-sa/4.0&amp;gt;, через Вікісховище" target="_blank"><img src="' . $urlwikimedia . 'thumb/' .  trim($array_wiki_photo[$i]) . '/256px-' .  substr(trim($array_wiki_photo[$i]), 5) . '" width="auto" height="auto" alt="' .  substr(trim($array_wiki_photo[$i]), 5) . ' "></a>';
				if ($count_wiki_photo !==2 && $i !== $count_wiki_photo - 1) $div_tab_d .= '<hr>'; }
		$div_tab_d .= '</div>';
	}
}

if ($row['wiki'] !=='') {
	$urlwiki = 'https://uk.wikipedia.org/wiki/';
	$lnk_wiki = '<a href="' . $urlwiki . $row['wiki'] . '" target="_blank"><i class="fab fa-wikipedia-w"></i></a>';
}

if ($row['poi_status'] !=='') {
		if ($row['poi_status_doc'] !=='') {$poi_status_doc = substr($row['poi_status_doc'], 0, 4);}
	$poi_status = ' – ' . $row['poi_status'] . ' з ' . $poi_status_doc . ' року.';
}

if ($row['poi_link'] !=='') {
	$poi_link = '<p>Дізнатися більше: ';
	$array_poi_link = explode(',', $row['poi_link']);
		foreach ($array_poi_link as $value) {
			$poi_link .= '<a href="' . $value . '" target="_blank"><i class="fas fa-link"></i></a> | ';
		}
	$poi_link .= '</p>';
}

if ($row['poi_opys'] !=='') {
	$tabs_links_b = '<button class="tablinks" onclick="openTab(\'tab-b\')">опис</button>';
	$div_tab_b = '<div id="tab-b" class="tabcontent" style="display: none">' . $row['poi_opys'] . $poi_status . $row['cmt'] .$poi_link . $lnk_wiki . '</div>';
	}

if ($row['poi_dt_old'] !=='') {
	$tabs_links_с = '<button class="tablinks" onclick="openTab(\'tab-c\')">обхват</button>';
	$div_tab_с = '<div id="tab-c" class="tabcontent" style="display: none"><table class="table table-sm"><thead><tr><th scope="col">Обхват (см)*</th><th scope="col">Дата</th></tr></thead><tbody>';
			$array_obxvat_dts = explode(',', $row['poi_dt_old']);
			$count_obxvat_dt = count($array_obxvat_dts);
				foreach ($array_obxvat_dts as $value) {
					$array_obxvat_dt = explode('/', $value);
					$div_tab_с .= '<tr><td>' . $array_obxvat_dt[0] . '</td><td>' . date_format(date_create($array_obxvat_dt[1]), "d.m.Y") . '</td></tr>';
			}
	 $div_tab_с .= '</tbody></table><br><p><i>* Обмір окружності стовбура дерева проводився на висоті 130 см від рівня землі. Відомостей на якій висоті проводився обмір до 2016 року немає.</i></p></div>';
	}

//echo '<h6>' . $row['poi_name'] . '</h6>';
/*  tabs-links  */
echo '<div class="tabs-links">';
	echo $tabs_links_a;
	echo $tabs_links_b;
	echo $tabs_links_с;
	echo $tabs_links_d;
echo '</div><!-- tabs-links -->';

/*  tabs-content  */
echo '<div class="tabs-content">';
	echo $div_tab_a;
	echo $div_tab_b;
	echo $div_tab_с;
	echo $div_tab_d;
echo '</div><!-- tabs-content -->';

?>
