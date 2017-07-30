import exportToCsv from './csvHelper';
import firebase from '../firebase';


export default () => {
  firebase.database()
    .ref('locations')
    .once('value', (snapshot) => {
      const data = [['street', 'ward', 'district', 'city', 'country', 'longitude', 'latitude']];
      const db = snapshot.val();

      Object.values(db).forEach((item) => {
        const temp = [];
        temp.push(item.street || null);
        temp.push(item.ward || null);
        temp.push(item.district || null);
        temp.push(item.city || null);
        temp.push(item.country || null);
        temp.push(item.longitude || null);
        temp.push(item.latitude || null);

        data.push(temp);
      });

      try {
        const now = new Date();
        const currentDateTimeString = `${now.getMonth() + 1}-${now.getDate()}-${now.getFullYear()}-${now.getHours()}${now.getMinutes()}${now.getSeconds()}`;

        exportToCsv(`Locations-${currentDateTimeString}.csv`, data);
      } catch (err) {
        console.error(err);
      }
    });
};
