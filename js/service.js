var sel_b = 1;
window.onload = function(){

	var raz0 = document.getElementById('button_1');
	raz0.onmouseenter = function() { 
    this.style = 'border: 4px solid #d5e6f0;background-color: #6fa4c7;color: #fff;';
  }
  raz0.onmouseleave = function() { 
    if(sel_b!=1)this.style = 'border: 1px solid #6fa4c7;background-color: #fff;color: #000;';
  }
	var raz0 = document.getElementById('button_2');
	raz0.onmouseenter = function() { 
    this.style = 'border: 4px solid #d5e6f0;background-color: #6fa4c7;color: #fff;';
  }
  raz0.onmouseleave = function() { 
    if(sel_b!=2)this.style = 'border: 1px solid #6fa4c7;background-color: #fff;color: #000;';
  }
	var raz0 = document.getElementById('button_3');
	raz0.onmouseenter = function() { 
    this.style = 'border: 4px solid #d5e6f0;background-color: #6fa4c7;color: #fff;';
  }
  raz0.onmouseleave = function() { 
    if(sel_b!=3)this.style = 'border: 1px solid #6fa4c7;background-color: #fff;color: #000;';
  }
	var raz0 = document.getElementById('button_4');
	raz0.onmouseenter = function() { 
    this.style = 'border: 4px solid #d5e6f0;background-color: #6fa4c7;color: #fff;';
  }
  raz0.onmouseleave = function() { 
    if(sel_b!=4)this.style = 'border: 1px solid #6fa4c7;background-color: #fff;color: #000;';
  }
	var raz0 = document.getElementById('button_5');
	raz0.onmouseenter = function() { 
    this.style = 'border: 4px solid #d5e6f0;background-color: #6fa4c7;color: #fff;';
  }
  raz0.onmouseleave = function() { 
    if(sel_b!=5)this.style = 'border: 1px solid #6fa4c7;background-color: #fff;color: #000;';
  }
	var raz0 = document.getElementById('button_6');
	raz0.onmouseenter = function() { 
    this.style = 'border: 4px solid #d5e6f0;background-color: #6fa4c7;color: #fff;';
  }
  raz0.onmouseleave = function() { 
    if(sel_b!=6)this.style = 'border: 1px solid #6fa4c7;background-color: #fff;color: #000;';
  }
	var raz0 = document.getElementById('button_7');
	raz0.onmouseenter = function() { 
    this.style = 'border: 4px solid #d5e6f0;background-color: #6fa4c7;color: #fff;';
  }
  raz0.onmouseleave = function() { 
    if(sel_b!=7)this.style = 'border: 1px solid #6fa4c7;background-color: #fff;color: #000;';
  }
	var raz0 = document.getElementById('button_8');
	raz0.onmouseenter = function() { 
    this.style = 'border: 4px solid #d5e6f0;background-color: #6fa4c7;color: #fff;';
  }
  raz0.onmouseleave = function() { 
    if(sel_b!=8)this.style = 'border: 1px solid #6fa4c7;background-color: #fff;color: #000;';
  }


	start_replace_b1();
	var button_1 = document.getElementById("button_1");
    button_1.onclick = replace_b1;
    var button_2 = document.getElementById("button_2");
    button_2.onclick = replace_b2;
    var button_3 = document.getElementById("button_3");
    button_3.onclick = replace_b3;
    var button_4 = document.getElementById("button_4");
    button_4.onclick = replace_b4;
    var button_5 = document.getElementById("button_5");
    button_5.onclick = replace_b5;
    var button_6 = document.getElementById("button_6");
    button_6.onclick = replace_b6;
    var button_7 = document.getElementById("button_7");
    button_7.onclick = replace_b7;
    var button_8 = document.getElementById("button_8");
    button_8.onclick = replace_b8;

}
function start_replace_b1(){
	document.getElementById('button_1').style = 'border: 4px solid #d5e6f0;background-color: #6fa4c7;color: #fff;';
    var target = document.getElementById('service_content');
	target.innerHTML = ser_b1;
	document.getElementById('service_content').style = 'height: 523px;';
	document.getElementById('services').style = 'height: 1320px;';
}
function replace_b1(){
	sel_b = 1;
	refrash_allbut();
	document.getElementById('button_1').style = 'border: 4px solid #d5e6f0;background-color: #6fa4c7;color: #fff;';
    var target = document.getElementById('service_content');
	target.innerHTML = ser_b1;
	document.getElementById('service_content').style = 'height: 523px;';
	document.getElementById('services').style = 'height: 1320px;';
}
function replace_b2(){
	sel_b = 2;
	refrash_allbut();
	document.getElementById('button_2').style = 'border: 4px solid #d5e6f0;background-color: #6fa4c7;color: #fff;';
    var target = document.getElementById('service_content');
	target.innerHTML = ser_b2;
	document.getElementById('service_content').style = 'height: 523px;';
	document.getElementById('services').style = 'height: 1320px;';
}
function replace_b3(){
	sel_b = 3;
	refrash_allbut();
	document.getElementById('button_3').style = 'border: 4px solid #d5e6f0;background-color: #6fa4c7;color: #fff;';
    var target = document.getElementById('service_content');
	target.innerHTML = ser_b3;
	document.getElementById('service_content').style = 'height: 230px;';
	document.getElementById('services').style = 'height: 1020px;';
}
function replace_b4(){
	sel_b = 4;
	refrash_allbut();
	document.getElementById('button_4').style = 'border: 4px solid #d5e6f0;background-color: #6fa4c7;color: #fff;';
    var target = document.getElementById('service_content');
	target.innerHTML = ser_b4;
	document.getElementById('service_content').style = 'height: 400px;';
	document.getElementById('services').style = 'height: 1190px;';
}
function replace_b5(){
	sel_b = 5;
	refrash_allbut();
	document.getElementById('button_5').style = 'border: 4px solid #d5e6f0;background-color: #6fa4c7;color: #fff;';
    var target = document.getElementById('service_content');
	target.innerHTML = ser_b5;
	document.getElementById('service_content').style = 'height: 200px;';
	document.getElementById('services').style = 'height: 990px;';
}
function replace_b6(){
	sel_b = 6;
	refrash_allbut();
	document.getElementById('button_6').style = 'border: 4px solid #d5e6f0;background-color: #6fa4c7;color: #fff;';
    var target = document.getElementById('service_content');
	target.innerHTML = ser_b6;
	document.getElementById('service_content').style = 'height: 200px;';
	document.getElementById('services').style = 'height: 990px;';
}
function replace_b7(){
	sel_b = 7;
	refrash_allbut();
	document.getElementById('button_7').style = 'border: 4px solid #d5e6f0;background-color: #6fa4c7;color: #fff;';
    var target = document.getElementById('service_content');
	target.innerHTML = ser_b7;
	document.getElementById('service_content').style = 'height: 753px;';
	document.getElementById('services').style = 'height: 1550px;';
}
function replace_b8(){
	sel_b = 8;
	refrash_allbut();
	document.getElementById('button_8').style = 'border: 4px solid #d5e6f0;background-color: #6fa4c7;color: #fff;';
    var target = document.getElementById('service_content');
	target.innerHTML = ser_b8;
	document.getElementById('service_content').style = 'height: 523px;';
	document.getElementById('services').style = 'height: 1320px;';

}
function refrash_allbut(){
	document.getElementById('button_1').style = 'border: 1px solid #6fa4c7;background-color: #fff;color: #000;';
	document.getElementById('button_2').style = 'border: 1px solid #6fa4c7;background-color: #fff;color: #000;';
	document.getElementById('button_3').style = 'border: 1px solid #6fa4c7;background-color: #fff;color: #000;';
	document.getElementById('button_4').style = 'border: 1px solid #6fa4c7;background-color: #fff;color: #000;';
	document.getElementById('button_5').style = 'border: 1px solid #6fa4c7;background-color: #fff;color: #000;';
	document.getElementById('button_6').style = 'border: 1px solid #6fa4c7;background-color: #fff;color: #000;';
	document.getElementById('button_7').style = 'border: 1px solid #6fa4c7;background-color: #fff;color: #000;';
	document.getElementById('button_8').style = 'border: 1px solid #6fa4c7;background-color: #fff;color: #000;';
}

var ser_b1 = '\
    <div id="col-1" class="col-1">\
	<div class="header_service1">Услуги по недвижимости</div>\
	<hr class="line_2"><br>\
	<div class="content">\
		<ul>\
			<li>Заключение договора социального найма на жилое помещение</li>\
			<li>Приватизация имущества</li>\
			<li>Выкуп помещения, доли в помещении (комнаты в коммунальной квартире)</li>\
			<li>Продление договора аренды помещения</li>\
			<li>Участие в торгах для приобретения имущества</li>\
			<li>Вселение в жилое помещение и выселение из него</li>\
			<li>Определение порядка пользования помещением</li>\
			<li>Обжалование распоряжения Департамента городского имущества</li>\
			<li>Перепланировка и переустройство помещений</li> \
			<li>Дела об установлении фактов имеющих юридическое значение</li> \
		</ul>\
	</div>\
</div>\
<div id="col-2" class="col-2">\
	<div class="header_service2">Помощь и сопровождение по 214 ФЗ «Об участии в долевом строительстве»</div>\
	<hr class="line_3"><br>\
	<div class="content">\
		<ul>\
			<li>Сопровождение вплоть до получения ключей вами от застройщика</li>\
			<li>Помощь в взыскании неутойки в максимальном размере  и без последствий для вас</li>\
			<li>Помощь в подписании акта приема-передачи объекта и других документов в процессе взаимодействия с застройщиком</li>\
		</ul>\
	</div>	\
	<hr class="line_3"><br>\
	<div class="content">\
		<ul>\
			<li>Перевод помещений из жилого фонда в нежилой</li>\
			<li>Перевод помещений из нежилого фонда в жилой</li>\
			<li>Перевод помещений из апартаментов в жилой фонд</li>\
			<li>Перевод помещений из апартаментов в жилой фонд</li>\
		</ul>\
	</div>	\
</div>\
    ';
var ser_b2 = '\
    <div id="col-1" class="col-1">\
	<div class="header_service1">Услуги по земельным делам</div>\
	<hr class="line_2"><br>\
	<div class="content">\
		<ul>\
			<li>Снижение кадастровой стоимости земельного участка</li>\
			<li>Установление и изменение целевого назначения земельного участка</li>\
			<li>Определение и изменение вида разрешенного использования</li>\
			<li>Определение границ земельного участка</li>\
			<li>Признание права собственности на земельный участок</li>\
			<li>Сопровождение сделок купли-продажи и аренды земельных участков</li>\
			<li>Возмещение убытков, причиненных нарушением прав собственников земельных участков, землепользователей, землевладельцев и арендаторов земельных участков, связанных с изъятием земельного участка, либо ограничением права владения, пользования и распоряжения им</li>\
		</ul>\
	</div>\
</div>\
<div id="col-2" class="col-2">\
	<div class="header_service2"><br><br><br></div>\
	<div class="content">\
		<ul>\
			<li>Дела по искам СНТ (других садоводческой организации) к членам СНТ (других садоводческой организации) и другим лицам, связанные с членством и пользованием земельными участками, об устранении препятствий в пользовании земельными участками и объектами недвижимости</li>\
			<li>Дела о признании недействительным решения общего собрания СНТ</li>\
			<li>Споры, связанные с самовольной постройкой</li>\
			<li>Споры о правах на земельные участки, на которых расположены многоквартирные дома</li>\
		</ul>\
	</div>	\
</div>\
    ';
var ser_b3 = '\
    <div id="col-1" class="col-1">\
	<div class="header_service1">Услуги по земельным делам</div>\
	<hr class="line_2"><br>\
	<div class="content">\
		<ul>\
			<li>Сопровождение по процедуре передаче и принятия наследства по завещанию</li>\
			<li>Помощь в принятии наследства по закону</li>\
			<li>Установление факта принятия наследства</li>\
		</ul>\
	</div>\
</div>\
<div id="col-2" class="col-2">\
	<div class="header_service2"><br><br><br></div>\
	<div class="content">\
		<ul>\
			<li>Признание права собственности на имущество</li>\
			<li>Установление факта родственных отношений</li>\
		</ul>\
	</div>	\
</div>\
    ';
var ser_b4 = '\
    <div id="col-1" class="col-1">\
	<div class="header_service1">Услуги по семейным делам</div>\
	<hr class="line_2"><br>\
	<div class="content">\
		<ul>\
			<li>Развод</li>\
			<li>Раздел совместно нажитого имущества супругов</li>\
			<li>Признание брака недействительным</li>\
			<li>Дела о взыскании алиментов</li>\
			<li>Дела о лишении и ограничении родительских прав</li>\
			<li>Дела об оспаривании отцовства (материнства)</li>\
			<li>Дела об определении порядка участия в воспитании ребенка родителем, проживающим отдельно от него</li>\
		</ul>\
	</div>\
</div>\
<div id="col-2" class="col-2">\
	<div class="header_service2"><br><br><br></div>\
	<div class="content">\
		<ul>\
			<li>Дела о восстановлении в родительских правах</li>\
			<li>Дела об усыновлении</li>\
		</ul>\
	</div>	\
</div>\
    ';
var ser_b5 = '\
    <div id="col-1" class="col-1">\
	<div class="header_service1">Услуги по административным делам </div>\
	<hr class="line_2"><br>\
	<div class="content">\
		<ul>\
			<li>Споры о лишении водительских прав</li>\
			<li>Дела по дорожно-транспортным происшествиям</li>\
			<li>Споры по КАСКО и ОСАГО</li>\
		</ul>\
	</div>\
</div>\
<div id="col-2" class="col-2">\
	<div class="header_service2"><br><br><br></div>\
	<div class="content">\
		<ul>\
			<li></li>\
			<li></li>\
		</ul>\
	</div>	\
</div>\
    ';
var ser_b6 = '\
    <div id="col-1" class="col-1">\
	<div class="header_service1">Услуги по уголовным делам</div>\
	<hr class="line_2"><br>\
	<div class="content">\
		<ul>\
			<li>Грамотно консультирую и представляю интересы по всем уголовным делам и даю правовую оценку с точки зрения мышления стороны обвинения (прокурора) и судьи</li>\
		</ul>\
	</div>\
</div>\
<div id="col-2" class="col-2">\
	<div class="header_service2"><br><br><br></div>\
	<div class="content">\
		<ul>\
			<li></li>\
			<li></li>\
		</ul>\
	</div>	\
</div>\
    ';
var ser_b7 = '\
    <div id="col-1" class="col-1">\
	<div class="header_service1">Услуги по арбитражным делам</div>\
	<hr class="line_2"><br>\
	<div class="content">\
		<ul>\
			<li>Дела о несостоятельности (банкротстве)</li>\
			<li>Дела по спорам о создании, реорганизации и ликвидации организаций</li>\
			<li>Дела по спорам об отказе в государственной регистрации, уклонении от государственной регистрации юридических лиц, индивидуальных предпринимателей</li>\
			<li>Дела по спорам между акционером и акционерным обществом, участниками иных хозяйственных товариществ и обществ, за исключением трудовых споров</li>\
			<li>Дела о защите деловой репутации</li>\
			<li>Дела об административных правонарушениях</li>\
			<li>Дела о взыскании с организаций и граждан, осуществляющих предпринимательскую и иную экономическую деятельность, обязательных платежей, санкций</li>\
			<li>Дела об оспаривании решений третейских судов и международных коммерческих арбитражей, принятых на территории РФ, по спорам в сфере экономической деятельности</li>\
			<li>Дела о признании и приведении в исполнение решений иностранных судов и иностранных арбитражных решений по спорам в сфере экономической деятельности</li>\
		</ul>\
	</div>\
</div>\
<div id="col-2" class="col-2">\
	<div class="header_service2"><br><br><br></div>\
	<div class="content">\
		<ul>\
			<li>Другие дела, возникающие в сфере экономической деятельности</li>\
			<li>Дела об оспаривании нормативных правовых актов, затрагивающих права и законные интересы заявителя в сфере экономической деятельности</li>\
			<li>Дела об оспаривании ненормативных правовых актов органов государственной власти и местного самоуправления, их решений и действий (бездействия), затрагивающих права и законные интересы заявителя в сфере экономической деятельности</li>\
			<li>Подача исков о взыскании задолженности, неисполнении обязательств</li>\
			<li>Подготовка и ведение дел в третейских и арбитражных судах</li>\
			<li>Дела о признание договоров, сделок недействительными, об их изменении</li>\
			<li>Защита интересов по спорам, вытекающим из корпоративных отношений</li>\
			<li>Защита прав собственника, иного законного владельца, истребование имущества из чужого незаконного владения</li>\
			<li>Разрешение налоговых споров, возврат НДС, возврат из бюджета денежных средств, списанных контролирующими органами с нарушением требований законодательства</li>\
		</ul>\
	</div>	\
</div>\
    ';
var ser_b8 = '\
    <div id="col-1" class="col-1">\
	<div class="header_service1">Дела о защите прав потребителей</div>\
	<hr class="line_2"><br>\
	<div class="content">\
		<ul>\
			<li>Дела о защите прав потребителей – это категория дел, призванная предупредить, а также защитить покупателя товаров, работ или услуг от недобросовестных действий со стороны продавца, призванная сохранить и восстановить права покупателя при приобретении товаров, работ или услуг ненадлежащего качества. Моей целью является обеспечение соблюдения прав потребителей на приобретение товаров работ или услуг надлежащего качества и безопасных для жизни, здоровья, имущества потребителей и окружающей среды, получение информации о товарах (работах, услугах) и об их изготовителях (исполнителях, продавцах), просвещение, государственную и общественную защиту их интересов. Я представляю интересы пострадавшего на всем пути восстановления его прав и не ограничиваюсь рамками договорных отношений.\
			<li></li>\
			<li></li>\
		</ul>\
	</div>\
</div>\
    ';
