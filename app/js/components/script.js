/***************** Phone__-icon ********************/
var phoneItems = document.querySelectorAll('.phone__inner');
for (let index = 0; index < phoneItems.length; ++index) {
	let phoneItem = phoneItems[index];
		phoneItem.addEventListener("click", function (e) {
	if (phoneItem.classList.contains('.phone__inner--active')) {
		phoneItem.classList.remove('phone__inner--active');
	} else {
		phoneItem.classList.toggle('phone__inner--active');
	}
	})
}