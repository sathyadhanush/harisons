import { Label } from 'evergreen-ui';
import Avatar from './base/Avatar';

function User({ name, onClick }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }} onClick={onClick}>
      <Avatar name={name} size={34} />
      <div style={{ marginLeft: 10 }}>
        <div>{name}</div>
      </div>
    </div>
  );
}

export default User;

export function TableTextWithImage({
  name, collectionName, onClick, src = null,
}) {
  return (
    <div className="flex-center" onClick={onClick}>
      {src
        ? <img style={{ width: 38, borderRadius: '5px' }} src={src} alt="" />
        : <ion-icon name="image" style={{ color: 'lightGray', fontSize: '38px' }} />}
      <div className="flex-column" style={{ marginLeft: 10 }}>
        <Label color="#1885F2">{name}</Label>
        <Label style={{ marginTop: '3px' }}>{collectionName}</Label>
      </div>
    </div>
  );
}
