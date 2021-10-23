function onePunch(items) { return (/^[a-zA-Z -]+$/g).test(items) ? items.split(' ').sort().join(' ').replace(/[ae]+/gi, '') : 'Broken!' } //Don't leave this line!!
