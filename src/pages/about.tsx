import type { NextPage } from 'next'
import Layout from '../components/Layout'

const About: NextPage = () => {
  return (
    <Layout
      heading='About'
      title='About the Command Tactical Training Program'
      description='ComTac Training team has developed an interactive emergency
            simulation program. This program utilizes augmented reality,
            artificial intelligence, and machine learning to provide an
            opportunity to emulate the challenges of fire command.'>
      <p className='text-xl font-light leading-relaxed mt-6 mb-4 text-gray-800'>
        ComTac Training team has developed an interactive emergency simulation
        program. This program utilizes augmented reality, artificial
        intelligence, and machine learning to provide an opportunity to emulate
        the challenges of fire command. These challenges include the command
        functions of command, operations, planning, logistics and safety. This
        training program allows the user to develop their skills to deploy units
        in the hazard zone. Typical deployment areas are fire attack, rescue,
        exposures, confinement, extinguishment, overhaul, ventilation and
        salvage.
      </p>
      <p className='text-xl font-light leading-relaxed mt-6 mb-4 text-gray-800'>
        <strong>The key components exercise the process of:</strong>
      </p>
      <ul className='text-xl font-light leading-relaxed mt-6 mb-4 text-gray-800 list-disc'>
        <li>Assuming, confirming, and positioning command.</li>
        <li>Situational evaluation (size-up).</li>
        <li>Tactical and Strategic development.</li>
        <li>Incident Action Planning.</li>
        <li>Communications.</li>
        <li>Developing the incident organization.</li>
        <li>Review and revise actions taken.</li>
        <li>Continue, Support, and Termination of Command.</li>
      </ul>
      <p className='text-xl font-light leading-relaxed mt-6 mb-4 text-gray-800'>
        This is an excellent opportunity to obtain your ‘Sets and Reps” while
        preparing to be first on scene of an emergency. It is also a good
        promotional exam exercise.
      </p>
    </Layout>
  )
}

export default About
