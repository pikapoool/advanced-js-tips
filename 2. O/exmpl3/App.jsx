import Admin from './Admin'
import SuperAdmin from './SuperAdmin'

export const App = () => {
  const user = {};
  
  const userByTypes = {
    'admin' : <Admin /> ,
    'superadmin' : <SuperAdmin />
  };
  
  return (<div>{userByTypes[`${user.type}`]}</div>);
};