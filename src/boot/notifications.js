import { Dialog, Notify } from 'quasar';
export const NotifyPersonal = (typeNotify, from, messageSending, picture) => {
	let message = from;
	let caption = messageSending;
	let avatar = picture;
		let	color = 'orange'

	let title = "Success";
	switch (typeNotify) {
		case "Error":
			color = 'red-14'
			title = "Error"
			break;
		case "Info":
			color = 'blue'
			title = "Information"
			break;
		case "Warning":
			color = 'yellow'
			title = "Warning"
			break;
		case "Success":
			color = 'orange'
			title = "Success"
			break;
		case "NotifyChat":
			color = 'orange'
				
			break;
		default:
			break;
	}
	// console.log(badgeStyle,'style')
	Notify.create({ color, message, caption, avatar });

}
export const DialogPersonal = (typeNotify, messageSending) => {
	let message = messageSending;
	let color = 'green'
	let title = "Success"
	switch (typeNotify) {
		case "Error":
			color = 'red'
			title = "Error"
			break;
		case "Info":
			color = 'blue'
			title = "Information"
			break;
		case "Warning":
			color = 'yellow'
			title = "Warning"
			break;
		default:
			break;
	}
	Dialog.create({ title, message, color });

}
