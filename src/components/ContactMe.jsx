import { useState } from 'react';
import { useToast } from '@chakra-ui/react'
import {
  createStyles,
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  rem,
  Paper
} from '@mantine/core';
import BrandButtonGroup from './BrandButtonGroup';
import { ContactIconsList } from './ContactIconsList';

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    boxSizing: 'border-box',
    backgroundImage: `linear-gradient(-60deg, ${theme.colors[theme.primaryColor][4]} 0%, ${theme.colors[theme.primaryColor][7]
      } 100%)`,
    borderRadius: theme.radius.md,
    padding: `calc(${theme.spacing.xl} * 2.5)`,

    [theme.fn.smallerThan('sm')]: {
      padding: `calc(${theme.spacing.xl} * 1.5)`,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.white,
    lineHeight: 1,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: rem(300),

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  control: {
    backgroundColor: theme.colors[theme.primaryColor][6],
  },
}));

export function ContactMe() {
  const toast = useToast();

  const [formData, setFormData] = useState({
    name: '',
    _replyto: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/xdobkayk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form successfully sent');
        // Optionally reset the form or navigate user to a thank you page
        setFormData({
          name: '',
          _replyto: '',
          message: '',
        });

        toast({
          title: 'Message sent',
          description: 'Thank you. I will answer as soon as possible',
          status: 'success',
          duration: 9000,
          isClosable: true,
          position: 'top-right'
        })
      } else {
        console.error('Error sending form');
      }
    } catch (error) {
      console.error('There was an error sending the form', error);
    }
  };

  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <SimpleGrid cols={2} spacing={50} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <div>
          <Title className={classes.title}>Contact Info</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Send me an email directly from this page or text me. I will answer as soon as possible
          </Text>

          <ContactIconsList variant="white" />
          <Paper radius={'md'} p={'md'} mt={'md'}>
            <BrandButtonGroup />
          </Paper>

        </div>
        <Paper radius={'md'} p={'xl'}>
          <form onSubmit={handleSubmit}>
            <TextInput
              name="_replyto"
              label="Email"
              placeholder="your@email.com"
              onChange={handleChange}
              value={formData._replyto}
              required
            />
            <TextInput
              name="name"
              label="Name"
              placeholder="Your name"
              onChange={handleChange}
              value={formData.name}
              mt="md"
            />
            <Textarea
              name="message"
              required
              label="Message"
              placeholder="Your message"
              minRows={4}
              mt="md"
              onChange={handleChange}
              value={formData.message}
            />
            <div style={{ flexGrow: 1 }}></div>
            <Group position="right" mt="md">
              <Button className={classes.control} type="submit">
                Send message
              </Button>
            </Group>
          </form>
        </Paper>
      </SimpleGrid>
    </div>
  );
}
