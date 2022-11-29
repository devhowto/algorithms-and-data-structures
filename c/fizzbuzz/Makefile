CC=gcc
CFLAGS=-Wall -pedantic
EXE=fizzbuzz_v1

all: $(EXE)

%: %.c
	$(CC) $(CFLAGS) $< -o $@

clean:
	rm -v *.o *.dSYM $(EXE)
