import React from 'react';
import {
  ThemeProvider,
  GlobalStyles,
  Alert,
  Stack,
  Button,
  Checkbox,
  Heading,
  Icon,
  Image,
  Input,
  InputField,
  Link,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Flex,
  PseudoBox,
} from 'minerva-ui';
import './App.css';

function App() {
  const [checked, setChecked] = React.useState(false);
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [field, setField] = React.useState('');
  const [error, setError] = React.useState('This field has an error');
  const [errorField, setErrorField] = React.useState('');
  const [open, setOpen] = React.useState(false);

  return (
    <ThemeProvider>
      <GlobalStyles />
      <main className='App'>
        <header className='App-header'>
          <h1>
            Minerva
            <br />
            Kitchen Sink
          </h1>
        </header>

        <section className='component-wrapper'>
          <h2 className='component-title'>Alert</h2>
          <Stack gap='30px'>
            <Alert status='error' title='Whoa!'>
              Something not great is happening
            </Alert>
            <Alert status='success' title='Congrats!'>
              Something great is happening!
            </Alert>
          </Stack>
        </section>
        <section className='component-wrapper'>
          <h2 className='component-title'>Button</h2>
          <Stack gap='30px'>
            <Button>Button</Button>
            <Button isLoading>Loading Button</Button>
            <Button disabled>Disabled Button</Button>
          </Stack>
        </section>
        <section className='component-wrapper'>
          <h2 className='component-title'>Checkbox</h2>
          <Checkbox checked={checked} onChange={() => setChecked(!checked)}>
            <span className='white-text'>Stay Logged In</span>
          </Checkbox>
        </section>
        <section className='component-wrapper'>
          <h2 className='component-title'>Heading</h2>
          <Stack className='white-text'>
            <Heading fontSize='2xl'>2x Large Heading</Heading>
            <Heading fontSize='xl'>Extra Large Heading</Heading>
            <Heading fontSize='lg'>Large Heading</Heading>
            <Heading fontSize='md'>Medium Heading</Heading>
            <Heading fontSize='sm'>Small Heading</Heading>
            <Heading fontSize='xs'>Extra Small Heading</Heading>
          </Stack>
        </section>
        <section className='component-wrapper'>
          <h2 className='component-title'>Icon</h2>
          <Stack horizontal gap='20px'>
            <Icon name='alert-octagon' color='white' />
            <Icon name='archive' color='white' />
            <Icon name='at-sign' color='white' />
          </Stack>
        </section>
        <section className='component-wrapper'>
          <h2 className='component-title'>Image</h2>
          <Image src='https://source.unsplash.com/random' maxWidth='20rem' />
        </section>
        <section className='component-wrapper'>
          <h2 className='component-title'>Input</h2>
          <Stack gap='30px'>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Basic Input'
            />
            <Input disabled placeholder='Disabled Input' />
            <Input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password Input'
            />
          </Stack>
        </section>
        <section className='component-wrapper'>
          <h2 className='component-title'>Input Field</h2>
          <Stack gap='30px'>
            <InputField label='Basic Input' className='input-label white-text'>
              <Input
                style={{ color: 'black' }}
                placeholder='Basic Input'
                value={field}
                onChange={(e) => {
                  setField(e.target.value);
                }}
              ></Input>
            </InputField>
            <InputField
              className='input-label white-text'
              label='Input With Error'
              htmlFor='basicInput'
              errorMsg={error}
              errorStyles={{ color: '#FF8247', size: '16px' }}
              isRequired
              requiredMarkerColor='#FF6347'
            >
              <Input
                style={{ color: 'black' }}
                id='basicInput'
                placeholder='Input with error'
                value={errorField}
                onBlur={
                  !name ? () => setError('This field cannot be empty') : null
                }
                onChange={(e) => {
                  setError('This field cannot be empty');
                  setErrorField(e.target.value);
                }}
              ></Input>
            </InputField>
          </Stack>
        </section>
        <section className='component-wrapper'>
          <h2 className='component-title'>Link</h2>
          <Stack gap='20px' className='white-text'>
            <Link href='/'>Home</Link>
            <Link href='https://www.github.com/cratebind/minerva-ui' isExternal>
              Minerva UI GitHub Page
            </Link>
          </Stack>
        </section>
        <section className='component-wrapper'>
          <h2 className='component-title'>Modal</h2>
          <Button onClick={() => setOpen(true)}>Open Modal</Button>
          <Modal isOpen={open} onClose={() => setOpen(false)} overflow='hidden'>
            <ModalHeader onClose={() => setOpen(false)}>
              Hello World!
            </ModalHeader>
            <ModalBody>
              Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
              ullamco deserunt aute id consequat veniam incididunt duis in sint
              irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
              officia tempor esse quis. Sunt ad dolore quis aute consequat.
            </ModalBody>
            <ModalFooter>
              <Flex
                px={6}
                py={3}
                flexDirection={['column', 'row-reverse']}
                bg='gray.50'
                radiusBottom='5px'
              >
                <Button
                  onClick={() => setOpen(false)}
                  boxShadow='base'
                  width={['100%', 'auto']}
                >
                  Submit
                </Button>
              </Flex>
            </ModalFooter>
          </Modal>
        </section>
        <section className='component-wrapper'>
          <h2 className='component-title'>Psuedo Box</h2>
          <PseudoBox
            as={Input}
            placeholder='Focus me'
            py={2}
            px={4}
            bg='gray.200'
            color='gray.900'
            borderColor='transparent'
            borderWidth='2px'
            rounded='md'
            outline='none'
            _focus={{ backgroundColor: '#fff', borderColor: 'purple' }}
          />
        </section>
      </main>
    </ThemeProvider>
  );
}

export default App;
