import {Pipe} from '@angular/core';

@Pipe({
	name: 'TextFilter'
})

export class TextFilter {
	transform(value, args?) {
		let text = args;
		return value.filter(object => {
			if(text) {
				return object.ObjectName.toLowerCase().indexOf(text) > -1;
			} else {
				return true;
			}
		});
	}
}