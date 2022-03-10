import React, {useContext, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHistory,
  faAtlas,
  faBell,
  faHome,
  faClinicMedical
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import AuthContext from '../../context/AuthContext'
import withAuth from '../../utils/withAuth'
import { Formik, Form } from 'formik';
import Input from '../../src/components/ui/FormInputs/Input';
import { profileschema } from '../../utils/Schemas';
import FullPageLoader from '../../src/components/ui/Spinner/FullPageLoader';
import {useRouter} from "next/router";

function Index() {

  const router = useRouter()
  const handleOnSubmit = (values) => {
    console.log(values);
    //alert('OK');
  };

  // Initial Values of form
  const initialValues = {
    first_name: '',
    last_name: '',
    phone: '',
    password: '',
  };

  let {isAuthenticated, user, logoutUser, isLoading} = useContext(AuthContext)
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, isLoading]);
  if (isLoading || !isAuthenticated) {
    return <FullPageLoader />;
  }
  return (
    <div className='grid grid-cols-2 p-12 gap-6 '>
      <div className='mx-auto container shadow-md p-6'>
        <div className='bg-gray-100 p-4 border-t-2 bg-opacity-5 border-green-700 rounded-t'>
          <h2>Gérer votre compte</h2>
          <div className='gap-6'>
            {
              user?.role == "ROLE_PROP" ? (
                <>
                  <Link href='/reservationhistoryprop'>
                    <a href='#'>
                      <div className='p-6 shadow-md cursor-pointer flex justify-between'>
                        <label>Historique des réservations</label>
                        <FontAwesomeIcon
                          className='h-8 text-green-900'
                          size='xs'
                          icon={faHistory}
                        />
                      </div>
                    </a>
                  </Link>
                  <Link href='/propertiesprop'>
                    <a href='#'>
                      <div className='p-6 shadow-md cursor-pointer flex justify-between'>
                        <label>Mes biens</label>
                        <FontAwesomeIcon
                          className='h-8 text-green-900'
                          size='xs'
                          icon={faHome}
                        />
                      </div>
                    </a>
                  </Link>
                  <Link href='/addproperties'>
                    <a href='#'>
                      <div className='p-6 shadow-md cursor-pointer flex justify-between'>
                        <label>Ajouter un bien</label>
                        <FontAwesomeIcon
                            className='h-8 text-green-900'
                            size='xs'
                            icon={faClinicMedical}
                        />
                      </div>
                    </a>
                  </Link>
                </>
              ): (
                <>
                  <Link href='/reservationhistoryloc'>
                    <a href='#'>
                      <div className='p-6 shadow-md cursor-pointer flex justify-between'>
                        <label>Historique des réservations</label>
                        <FontAwesomeIcon
                          className='h-8 text-green-900'
                          size='xs'
                          icon={faHistory}
                        />
                      </div>
                    </a>
                  </Link>
                </>
              )
            }
            <Link href='/faq'>
              <a href='#'>
                <div className='p-6 shadow-md cursor-pointer flex justify-between'>
                  <label>Paramétre de confidentialité</label>
                  <FontAwesomeIcon
                    className='h-8 text-green-900'
                    size='xs'
                    icon={faAtlas}
                  />
                </div>
              </a>
            </Link>
            <Link href='/faq'>
              <a href='#'>
                <div className='p-6 shadow-md cursor-pointer flex justify-between'>
                  <label>Mes notifications</label>
                  <FontAwesomeIcon
                    className='h-8 text-green-900'
                    size='xs'
                    icon={faBell}
                  />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className='mx-auto container shadow-md p-6'>
        <div className='bg-gray-100 p-4 border-t-2 bg-opacity-5 border-green-700 rounded-t'>
          <h2>Informations personnelle</h2>
          <div className='mt-6 max-w-sm mx-auto md:w-full md:mx-0'>
            <div className='inline-flex items-center space-x-4'>
              <img
                className='w-10 h-10 object-cover rounded-full'
                alt='User avatar'
                src='https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/default-avatar.png'
              />

              <h1 className='text-gray-600'>{user?.firstName} {user?.lastName}</h1>
            </div>
          </div>
        </div>
        <div className='bg-white space-y-6'>
          <div className='md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center'>
            <h2 className='md:w-1/3 max-w-sm mx-auto'>Compte</h2>
            <div className='md:w-2/3 max-w-sm mx-auto'>
              <label className='text-sm text-gray-400'>Email</label>
              <div className='w-full inline-flex border'>
                <div className='pt-2 w-1/12 bg-gray-100 bg-opacity-50'>
                  <svg
                    fill='none'
                    className='w-6 text-gray-400 mx-auto'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                </div>
                <input
                  type='email'
                  className='w-11/12 focus:outline-none focus:text-gray-600 p-2'
                  placeholder={user?.email}
                  disabled
                />
              </div>
            </div>
          </div>

          <hr />
          <Formik
            initialValues={{
              ...initialValues,
            }}
            validationSchema={profileschema}
            onSubmit={handleOnSubmit}
          >
            {(formik, errors, touched) => (
              <Form autoComplete='off'>
                <div className='md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center'>
                  <h2 className='md:w-1/3 mx-auto max-w-sm'>
                    Informations personnelle
                  </h2>
                  <div className='md:w-2/3 mx-auto max-w-sm space-y-5'>
                    <div>
                      <Input
                        label='Nom'
                        name='first_name'
                        type='text'
                        placeholder={user?.firstName}
                      />
                    </div>
                    <div>
                      <Input
                        label='Prénom'
                        name='last_name'
                        type='text'
                        placeholder={user?.lastName}
                      />
                    </div>
                    <div>
                      <Input
                        label='Numero de télephone'
                        name='phone'
                        type='text'
                        placeholder={user?.phone}
                      />
                    </div>
                  </div>
                </div>
                <hr />
                <div className='md:inline-flex w-full space-y-4 md:space-y-0 p-8 text-gray-500 items-center'>
                  <h2 className='md:w-4/12 max-w-sm mx-auto'>
                    Modifier le mot de passe
                  </h2>

                  <div className='md:w-5/12 w-full md:pl-9 max-w-sm mx-auto space-y-5 md:inline-flex pl-2'>
                    <div>
                      <Input
                        label='Mot de passe'
                        name='password'
                        type='password'
                        placeholder='************'
                      />
                    </div>{' '}
                  </div>

                  <div className='md:w-3/12 text-center md:pl-6'>
                    <button
                      type='submit'
                      className='text-white w-full mx-auto max-w-sm rounded-md text-center bg-indigo-400 py-2 px-4 inline-flex items-center focus:outline-none md:float-right'
                    >
                      <svg
                        fill='none'
                        className='w-4 text-white mr-2'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
                        />
                      </svg>
                      Modifier
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>

          <hr />
          <div className='w-full p-4 text-right text-gray-500'>
            <button className='inline-flex items-center focus:outline-none mr-4'>
              <svg
                fill='none'
                className='w-4 mr-2'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                />
              </svg>
              Supprimer le compte
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default withAuth(Index);