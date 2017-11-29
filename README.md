# CTM - Word Frequency

## The brief

We were tasked with writing a program in JavaScript that would be able to read a file and output the number of times each word is used in the book.

As an extension, we were asked to also come up with an algorithm  to determine whether the number of times this word appears is prime and then print this out too.

Describe how to install and run your code and tests.
## Installation

In order to be able to run the code you will need the files and relevant node packages installed on your machine. To do this, please do the following in order on your terminal/command line:

Ensure you have node installed on your computer:

`$ npm -v`

If node is not installed, you can install it by navigating to

https://nodejs.org/en/download/

and selecting the right option for your machine.

Once node is on your machine, run the following:

```
$ git clone https://github.com/willjsporter/ctm-file-reader.git
$ cd ctm-file-reader
$ npm install
```

This copies all files from the GitHub repo to your machine, navigates into the folder and then installs all the node dependencies.

## Running the app

To run the code, from inside the `ctm-file-reader` directory run

`$ npm Controller.js`

which will then prompt you for a filename. Type in the filepath relative to the root directory. For example, there is a test file with some sample text in `spec/helpers`; as such we would type the file's location relative to the root of this project - `spec/helpers/testFile.txt` - into the terminal. After hitting return, the program will run for the file you have chosen (as long as it is a valid filepath).

For a more complete text, you could have typed `RailwayChildren.txt` as the text of the Railway Children by E. Nesbit is saved in this document in the root directory.

An example is given below:

![alt text](https://github.com/willjsporter/ctm-file-reader/blob/master/images/testFile_Output.png "Example File output")



## Running the tests

To run the testing suite (through Jasmine), simply type

`$ jasmine`

into the command line. In the final instance of the program, there are 13 tests, all of which pass. 11 are unit tests while there are two feature tests to ensure integration of the different modules.

![alt text](https://github.com/willjsporter/ctm-file-reader/blob/master/images/tests_passing.png "13 tests, all passing")

## My Approach

At the outset I started out by writing out what I felt were the key aspects of the program and then diagramming these out. I did this separately for each of the two parts (the word counting and then the determining of whether each number was prime).

For the first step, I identified the following issues as key:

1. Removing all punctuation;
2. Putting all words into lowercase;
3. Storing all words individually in an array;
4. Removing all instances of a word when counted;
5. Returning the number of each word and the word.

![alt text](https://github.com/willjsporter/ctm-file-reader/blob/master/images/reader_diagram.png "File reader diagram")

For the 5th step, I initially planned to have this as a single object with all words as keys and the number of instances of each word as the values, however it became clear during the exercise that it would be better having a series of uniform objects, each with a `word` and `count` key with the relevant values stored in each.

For the second part of the exercise, I researched online the most efficient ways of finding prime numbers up to a certain value. As a mathematician I particularly enjoyed this and possibly spent a bit too long reading around about this!

 It appeared that there was a good tradeoff between complexity and efficiency by using the Sieve of Eratosthenes so I came up with an algorithm to implement this:


1. Find the max number, N, of instances of any words;
2. Have an array containing all values from 2 up to N (as these are the lowest and highest possible primes that could impact a given instance of our program);
3. Moving through the array in ascending order for each element, n, delete all elements, e, of the array such that both:
  - `e > n`
  - `e % n === 0`
4. Once we have iterated through the array, all remaining elements are primer
5. We only need to iterate through elements up to and including the square root of `N` since for any non-prime `m`, any factor pair `(a,b)` such that `a * b = m` either `a` or `b` is less than or equal to the square root of `m`.

![alt text](https://github.com/willjsporter/ctm-file-reader/blob/master/images/prime_diagram.png "Prime calculation diagram")

Working through the first set of problems, it became clear the shape that the program would take, for both instances. Although I had carefully planned and diagrammed at the outset, I was happy to change approach when faced with evidence or new ideas that pointed to a new approach being an improvement on or more practical than my original idea.

In the end, I had three modules:

1. `Reader` - This read the file and then formatted it into an array, removing the case and punctuation around each word to give a simple word by word array representation of the book.
2. `WordCounter` - This was designed to convert the array generated by methods on an instance of `Reader` to an array of JavaScript objects, each with keys for word and count.
3. `Primer` - While the name is an homage to a film I have seen but not understood well, the `Primer` module was fairly clear! It implemented the algorithm above to check which numbers up to the number of uses of the most used word were prime. After this, it then checked each word's count against the results to determine whether that word's usage count was prime and then added this information the the object generated in WordCounter.

These were all brought together by a Controller which simply ran the relevant functions in the correct order and implemented a command line interface for deciding which file you would like to read. The code for this was based on the feature tests written in advance of this class being written which made it much easier to write.


## Technologies used:
##### Code:
JavaScript with NodeJS;

##### Tests:
Jasmine with mock-fs for mocking of file-reading;

##### Command Line Input:
Prompt (from npm) to enable command line input to be read easily by my program

## Dependencies and packages used

The code has dependencies to the path and prompt packages from the node library. Neither were intrusive into the program and the path package was solely to allow a nicer way of writing the filepath and could easily be removed from the code. The prompt package was used to be able to manually input the file you want to read into the command line, saving the program from requiring a filename hardcoded into it, allowing for flexibility in what it reads.

My testing was done in Jasmine, but I also used the mock-fs package. This was implemented when I was trying to write the code using asynchronous methods and could have been replaced with manual mocking after the change to synchronous file reading, but there was no need to take this out and create more work for myself. In the end this worked nicely and provided a clear way of mocking a file being read for my unit tests without the need for dependency injection or a dummy file.

## Successes

I am happy with the implementation of the program and it appears to work well. As I will go on to speak about in the next section, there was one part of the implementation that was not tested but overall I am happy with the quality of the code.

My approach was fully TDD and at no point did I deviate from this path. I saw real benefits to this when I was refactoring my code at points and definitely felt a great sense of happiness at how easy my incremental steps made testing and succeeding in the refactoring process.

In particular, I noted that when I got further into the exercise, I was able to get my tests passing quicker rather than slower, even though some of the work was complicated or involved pulling together all three of my modules.

I enjoyed the exercise too which was great(!) and felt like I learnt a lot, particularly when looking at testing the asynchronous methods that I originally had where I had to delve deep into promises and how they work with testing as well as within the actual program.

I was happy with my git workflow - I had a plenty of commits due to being disciplined with my incremental progress.

Finally, I made a lot of effort with the naming of variables and methods, many times I changed these between commits as I felt I could be clearer. This is something I am working hard to improve upon and I felt that this was a really good exercise for doing this for me.

## Things that I would have liked to included

If I had had more time on this project, there would be two things I would look to do in particular.

Firstly, I would have explored more deeply how to mock a command line input in order to test my Controller.js program. However, due to time constraints I was forced to abandon this which was far from ideal. Some comfort was gained by the fact that a) the program appeared to work from my manual checks and b) that much of the code was taken from the feature tests that pass. However, it was unfortunate not to be able to complete this testing and I would have been keen to implement this for my learning as well as for completeness of the project.

Secondly, I would try to use more linting and code coverage software. Having written the program exclusively using TDD, making sure to take small steps towards my goal as outlined in my planning, I am confident that the tests have shaped the program and there is nothing in the code that I believe is untested, aside from the controller, although this was written principally using code tested in the feature tests. However, my manual checking is certainly no substitute for a thorough checking software and I would have liked to explore that given more time. In the same vein, I went through all my files and checked the readability of the JavaScript and tried to ensure I was following best writing practices. However, it would have been better to use actual linting software to check this more thoroughly had there been more time available to me.

One other thing was that the code was initially written asynchronously, but I changed to synchronous code in order to speed up the implementation. Having spent some time looking into this method, it would have been good to see how the project would have worked using the asynchronous methods from the fs node module. This would make the project more scalable - for example as a web app that multiple users could use at once, or loading multiple files at once (particularly large ones).
