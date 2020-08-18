const manipulateStudentRecord = (obj, operation, prop, newValue) => {
   if (operation === 'delete') {
      if (obj.hasOwnProperty(prop)) {
         delete obj[prop];
      } else {
         newValue = undefined;
      }
   } else if (operation === 'edit') {
      if (obj.hasOwnProperty(prop)) {
         obj[prop] = newValue;
      }
   }
   return obj;
}