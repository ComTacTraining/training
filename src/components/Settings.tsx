const data = {
  dispatch: 'DispatchCenter',
  apparatus1: 'Engine 1',
  apparatus2: 'Engine 2',
  apparatus3: 'Engine 3',
  apparatus4: 'Truck 1',
  apparatus5: 'Truck 2',
  hideTips: false
}

const Settings = () => {
  return (
    <p className='text-sm p-2'>
      Dispatch Center: <strong>{data.dispatch}</strong>
      <br />
      Apparatus 1: <strong>{data.apparatus1}</strong>
      <br />
      Apparatus 2: <strong>{data.apparatus2}</strong>
      <br />
      Apparatus 3: <strong>{data.apparatus3}</strong>
      <br />
      Apparatus 4: <strong>{data.apparatus4}</strong>
      <br />
      Apparatus 5: <strong>{data.apparatus5}</strong>
      <br />
      Hide Tips: <strong>{data.hideTips ? 'Yes' : 'No'}</strong>
      <br />
    </p>
  )
}

export default Settings
