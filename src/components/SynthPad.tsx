import Button from './Button'

const SynthPad = () => {
  return (
    <div className='container'>
      <Button>Add New Oscillator</Button>
      <select className='select-oscillator'></select>
      <input type='number' className='frequency' />
      <select className='wave-type'>
        <option value='sine'>sine</option>
        <option value='sawtooth'>sawtooth</option>
        <option value='square'>square</option>
        <option value='triangle'>triangle</option>
      </select>
      <input type='range' className='oscillator-volume' />
      <input type='range' className='pad-volume' />
      <Button className='play'>Play</Button>
    </div>
  )
}

export default SynthPad
