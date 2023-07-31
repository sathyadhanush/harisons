/* eslint-disable import/no-cycle */
import { useState } from 'react';
import { capitalize } from 'lodash';
import Icons from 'components/Icons';
import {
  Heading, Label, Text,
} from 'evergreen-ui';
import Checkbox from './Checkbox';
import TextInput from './TextInput';
import Switch from './Switch';
import { ORDER_STATUS } from '../../app/orders/OrderView';
import '../scss/AppComponents.scss';

export function TextWithCardCouponsItems({ code, onClick, onStatusChange }) {
  const [checked, setChecked] = useState(true);
  return (
    <div className="coupon-item" onClick={onClick}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="icon-with-text">
          {Icons.Discounts}
          <Heading marginLeft="10px" fontSize="25px" fontWeight="500">
            {code}
          </Heading>
        </div>
        <Switch
          isChecked={checked}
          onChange={(c) => {
            setChecked(c);
            onStatusChange(c);
          }}
        />
      </div>
      <Label className="sub-text-coupon">
        {' '}
        ₹
        {10000}
        {' '}
        {' '}
        off on orders above  ₹
        {200000}
      </Label>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
          <Label fontWeight="300">Times Used</Label>
          <Label marginTop="5px" fontSize="20px">1</Label>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Label fontWeight="300">Total Sales Generated</Label>
          <Label marginTop="5px" fontSize="20px">
            {' '}
            ₹
            {2000000}
            {' '}
          </Label>
        </div>
      </div>
    </div>
  );
}

export function ImageWithCheckBoxText({
  name, isSelected, onChange, src = null,
}) {
  const [checked, setChecked] = useState(isSelected);
  return (
    <div
      className="ui-resource-list__item"
      onClick={() => {
        onChange(!checked);
        setChecked(!checked);
      }}
    >
      <Checkbox isChecked={checked} />
      {src
        ? <img style={{ width: 38, borderRadius: '5px' }} src={src} alt="" />
        : <ion-icon name="image" style={{ color: 'lightGray', fontSize: '38px', width: '38px' }} />}
      <div className="ml-16"><span>{name}</span></div>
    </div>
  );
}

export function ProductRow({ name, src = null, onRemove }) {
  return (
    <div className="flex-center-space-between" style={{ marginBottom: '20px' }}>
      <div className="flex-center">
        {src
          ? <img style={{ width: '45px', height: '45px', borderRadius: '5px' }} src={src} alt="" />
          : <ion-icon name="image" style={{ color: 'lightGray', fontSize: '45px' }} />}
        <Heading marginLeft={20}>{name}</Heading>
      </div>
      <Label onClick={onRemove} color="red" cursor="pointer">Remove</Label>
    </div>
  );
}

export function RenderProductDetails({
  name, onRemove, price, edit, totalQuantity = 1,
}) {
  const [quantity, setQuantity] = useState(totalQuantity);
  const numericPrice = parseFloat(price.toString().replace('$', ''));
  return (
    <div>
      <div style={{ display: 'flex', marginTop: '20px', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <img className="box-Img" alt="" src="https://loremflickr.com/320/320/item?nocache" />
          <div style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', marginLeft: '10px',
          }}
          >
            <Label>
              <span style={{ display: 'flex', fontWeight: '500', fontSize: '15px' }}>{name}</span>
            </Label>
            <span>
              {' '}
              ₹
              {' '}
              {numericPrice * quantity}
            </span>
            {edit ? (
              <div style={{ display: 'flex' }}>
                <div className="product-add">
                  <Label
                    style={{ display: 'flex', color: '#1885F2' }}
                    onClick={() => setQuantity(quantity - 1)}
                  >
                    -
                  </Label>
                  <Label style={{ display: 'flex' }}>{quantity}</Label>
                  <Label
                    style={{ display: 'flex', color: '#1885F2' }}
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Label>
                </div>
                <Label
                  style={{
                    display: 'flex',
                    fontSize: '15px',
                    alignItems: 'center',
                    marginRight: '10px',
                  }}
                >
                  x
                </Label>
                <Label style={{ display: 'flex', fontSize: '15px', alignItems: 'center' }}>
                  ₹
                  {' '}
                  {numericPrice * quantity}
                </Label>
              </div>
            ) : (
              <div style={{ display: 'flex' }}>
                <div className="product-add">
                  <Label style={{ display: 'flex' }}>1</Label>
                </div>
                <Label style={{
                  display: 'flex', fontSize: '15px', alignItems: 'center', marginRight: '10px',
                }}
                >
                  x
                </Label>
                <Label style={{ display: 'flex', fontSize: '15px', alignItems: 'center' }}>{`₹  ${numericPrice * quantity}`}</Label>
              </div>
            )}
          </div>
        </div>
        {edit
          ? (
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
              <Label onClick={onRemove} style={{ display: 'flex', color: 'red' }}>Remove</Label>
            </div>
          )
          : <Label />}
      </div>
    </div>
  );
}

export function InventoryTextbox({
  id, value, onChange, isUpdate,
}) {
  const [quantity, setQuantity] = useState(value);
  if (isUpdate) {
    return (
      <TextInput
        onChange={(event) => {
          setQuantity(event.target.value);
          onChange(event);
        }}
        value={quantity}
        width={120}
        name={id}
        type="number"
      />
    );
  }
  return value;
}

export function OrderDetailsProductList({
  name, price, quantity, setQuantity, isEdit, onRemove, src = null,
}) {
  const [counter, setCounter] = useState(quantity);
  function renderCounter() {
    return (
      <div className="product-quantity-border" style={{ columnGap: '8px' }}>
        <ion-icon
          style={{ color: counter > 1 ? '#1885F2' : 'gray', cursor: 'pointer', fontSize: '18px' }}
          onClick={() => {
            if (counter > 1) {
              setCounter(counter - 1);
              setQuantity(counter - 1);
            }
          }}
          name="remove-outline"
        />
        <Label style={{ display: 'flex' }}>{counter}</Label>
        <ion-icon
          style={{ color: '#1885F2', cursor: 'pointer', fontSize: '18px' }}
          onClick={() => {
            setCounter(counter + 1);
            setQuantity(counter + 1);
          }}
          name="add-outline"
        />
      </div>
    );
  }
  return (
    <div className="flex">
      {src
        ? (
          <img
            style={{
              borderRadius: '5px', width: '90px',
            }}
            src={src}
            alt=""
          />
        )
        : <ion-icon name="image" style={{ color: 'lightGray', fontSize: '90px', height: '90px' }} />}
      <div
        className={isEdit ? 'flex-column-space-between' : 'flex-column-space-evenly'}
        style={{ marginLeft: '15px', width: '100%' }}
      >
        <span style={{ fontWeight: '500', fontSize: '15px' }}>{name}</span>
        <div className="flex-center-space-between">
          <div className="flex-center" style={{ columnGap: '10px', userSelect: 'none' }}>
            {isEdit
              ? renderCounter()
              : <Label className="product-quantity-border">{quantity}</Label>}
            <Heading>x</Heading>
            <Heading>{`₹${price}`}</Heading>
          </div>
          <Heading>{`₹${price * counter}`}</Heading>
        </div>
        {isEdit
          && (
            <div className="flex" style={{ justifyContent: 'end' }}>
              <Label onClick={onRemove} cursor="pointer" color="red">Remove</Label>
            </div>
          )}
      </div>
    </div>
  );
}

export function OrderStatusText({ status }) {
  if (status === ORDER_STATUS.Cancelled || status === ORDER_STATUS.Rejected
    || status === ORDER_STATUS.Failed) {
    return (<Text size={400} fontWeight={500} color="red" fontSize={16}>{capitalize(status)}</Text>);
  }
  if (status === ORDER_STATUS.Delivered) {
    return (<Text size={400} fontWeight={500} color="#42855B" fontSize={16}>{capitalize(status)}</Text>);
  }
  return (<Text size={400} fontWeight={500} fontSize={16}>{capitalize(status)}</Text>);
}
