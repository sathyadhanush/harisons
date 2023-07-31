// eslint-disable-next-line no-unused-vars
import { Label } from 'evergreen-ui';
import Button from './Button';

function EmptyView({
  heading = null,
  buttonText,
  onClick = null,
  content,
}) {
  return (
    <div className="flex-column-center" style={{ margin: '20px 0px', height: '100%', justifyContent: 'center' }}>
      <Label marginBottom={25} marginTop={25} fontSize={18}>{heading}</Label>
      {onClick && <Button appearance="primary" onClick={onClick}>{buttonText}</Button>}
      {content}
    </div>
  );
}

export default EmptyView;
