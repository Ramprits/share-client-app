import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
} from "@mantine/core";

import { useLogin } from "@pankod/refine-core";
import { BackgroundImage } from "@pankod/refine-mantine";
import { GoogleButton } from "./components/SocialButton";

type LoginFormType = {
  email: string;
  password: string;
  name?: string;
  term?: boolean;
};

export function AuthPage(props: PaperProps) {
  const { mutate: loginUserMutation, isLoading, error } = useLogin();

  const [type, toggle] = useToggle(["login", "register"]);
  const form = useForm({
    initialValues: {
      email: "rpsahani@mailinator.com",
      name: "",
      password: "Ramprit@12345",
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  function handleFormSubmit(value: LoginFormType) {
    if (type === "login") {
      loginUserMutation(value);
    }
  }

  const renderErrorMessage = (err: Error) => {
    return (
      <Group mt={5}>
        <Text color="red">{err}</Text>
      </Group>
    );
  };

  return (
    <BackgroundImage
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#2A132E",
      }}
      src="https://refine.ams3.cdn.digitaloceanspaces.com/login-background/background.png"
    >
      <Paper radius="md" p="xl" withBorder {...props} className="w-96">
        <Text
          size="lg"
          weight={500}
          className="text-center font-medium font-mono"
        >
          Welcome to Dhanai Fruits, {type} with
        </Text>

        <Group mb="md" mt="md" position="center">
          <GoogleButton radius="xl">Google</GoogleButton>
        </Group>

        <Divider
          label="Or continue with email"
          labelPosition="center"
          my="lg"
        />

        <form onSubmit={form.onSubmit(handleFormSubmit)}>
          <Stack>
            {type === "register" && (
              <TextInput
                label="Name"
                placeholder="Your name"
                value={form.values.name}
                onChange={(event) =>
                  form.setFieldValue("name", event.currentTarget.value)
                }
              />
            )}

            <TextInput
              label="Email"
              placeholder="hello@mantine.dev"
              value={form.values.email}
              onChange={(event) =>
                form.setFieldValue("email", event.currentTarget.value)
              }
              error={form.errors.email && "Invalid email"}
            />

            <PasswordInput
              label="Password"
              placeholder="Your password"
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue("password", event.currentTarget.value)
              }
              error={
                form.errors.password &&
                "Password should include at least 6 characters"
              }
            />

            {type === "register" && (
              <Checkbox
                label="I accept terms and conditions"
                checked={form.values.terms}
                onChange={(event) =>
                  form.setFieldValue("terms", event.currentTarget.checked)
                }
              />
            )}
          </Stack>
          {renderErrorMessage(error)}

          <Group position="apart" mt="xl">
            <Anchor
              component="button"
              type="button"
              color="dimmed"
              onClick={() => toggle()}
              size="xs"
            >
              {type === "register"
                ? "Already have an account? Login"
                : "Don't have an account? Register"}
            </Anchor>
            <Button type="submit" loading={isLoading}>
              {upperFirst(type)}
            </Button>
          </Group>
        </form>
      </Paper>
    </BackgroundImage>
  );
}
