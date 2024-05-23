// Components
import { Button } from "@/components/ui/button";
import { ButtonLoading } from "@/components/button-loading/button-loading.component";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
// Constants
import constants from "./constants/comment-form.constants";
// Icons
import { Check, ChevronsUpDown } from "lucide-react";
// Utils
import { cn } from "@/core/lib/utils";

export const CommentForm = ({
  form,
  handleSubmit,
  label,
  loading,
  threads,
  users,
}) => {
  console.log(threads, users);
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name={constants.FORM_FIELD_CONTENT.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{constants.FORM_FIELD_CONTENT.label}</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    disabled={loading}
                    placeholder={constants.FORM_FIELD_CONTENT.placeholder}
                    rows={10}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="threadId"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Hilos</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "justify-between",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? threads.find((thread) => thread._id === field.value)
                              ?.title
                          : "Selecciona un hilo"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandList>
                        <CommandInput placeholder="Buscar hilo..." />
                        <CommandEmpty>No se encontraron hilos</CommandEmpty>
                        <CommandGroup>
                          {threads.map((thread) => (
                            <CommandItem
                              value={thread.title}
                              key={thread._id}
                              onSelect={() => {
                                form.setValue("threadId", thread._id);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  thread._id === field.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {thread.title}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="userId"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Usuarios</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "justify-between",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? users.find((user) => user._id === field.value)?.name
                          : "Selecciona un usuario"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Buscar usuario..." />
                      <CommandList>
                        <CommandEmpty>No se encontraron usuarios</CommandEmpty>
                        <CommandGroup>
                          {users.map((user) => (
                            <CommandItem
                              value={user.name}
                              key={user._id}
                              onSelect={() => {
                                form.setValue("userId", user._id);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  user._id === field.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {user.name}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <ButtonLoading
          {...constants.BUTTON_SUBMIT_PROPS}
          {...{ label, loading }}
        />
      </form>
    </Form>
  );
};
