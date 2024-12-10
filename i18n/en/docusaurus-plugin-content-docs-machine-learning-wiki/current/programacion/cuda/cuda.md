---
sidebar_position: 5
authors:
  - name: Daniel Bazo Correa
description: Conoce la plataforma de CUDA de NVIDIA para sus GPUs.
title: CUDA
toc_max_heading_level: 4
---
# Bibliography

* [https://www.nvidia.com/](https://www.nvidia.com/)
* [The DLI (Deep Learning Institute) (uma.es)](http://nvidiadli.uma.es/index.php/es/certificaciones-nvidia)
* [CuPy: NumPy & SciPy for GPU](https://cupy.dev/)
* [Numba: A High Performance Python Compiler (pydata.org)](https://numba.pydata.org/)

# Introduction

**CUDA** (*Compute Unified Device Architecture*) is a parallel computing platform and application programming interface (API) developed by NVIDIA. It allows the use of graphical processing units (GPUs) to perform complex calculations more efficiently compared to central processing units (CPUs). CUDA is used in areas such as artificial intelligence, simulations, and graphics rendering.

## 1. CUDA Concepts

### 1.1. Introduction

The CUDA computing platform offers a broad ecosystem. However, in points 1 and 2, we will cover the use of CUDA in combination with the C programming language. Starting from point 3, we will explore other CUDA libraries and applications in Python.

CUDA is based on three fundamental qualities that highlight the GPU's capacity for parallel processing:

* **Simplicity**: The GPU organizes threads into groups of 32, known as _warps_. All threads in a _warp_ execute the same instruction simultaneously. This organization simplifies parallelism management.
* **Scalability**: The platform enables the creation of sustainable parallelization models thanks to the abundance of data, especially in large-scale applications. It uses the _Single Instruction Multiple Threads_ (SIMT) model to handle large volumes of data efficiently.
* **Productivity**: CUDA allows threads facing latencies to hide this time by switching to other threads, maintaining high processing efficiency.

### 1.2. Warps in CUDA

The key concept in CUDA is the ***warp***. At the hardware level, a block of threads is divided into _warps_, which are groups of 32 threads that execute instructions in parallel. These _warps_ remain in the multiprocessor until they complete their execution. A new block of threads is not launched until enough registers and shared memory are freed for the _warps_ of the new block. Immediate switching between threads within a _warp_ contributes to efficient execution.

CUDA combines software, firmware, and hardware to deliver a robust parallel computing platform:

* **Software**: Provides SIMD extensions that enable efficient GPU programming, facilitating parallel and scalable execution.
* **Firmware**: Includes drivers for GPU programming, supporting tasks such as rendering, API handling, and memory management.
* **Hardware**: Enables general GPU parallelism, optimizing parallel processing capability.

### 1.3. Heterogeneous Computing 

While CUDA offers significant advantages, it is crucial to balance the workload between the GPU and the CPU, an approach known as heterogeneous computing, which is based on:

* **GPU**: Oriented towards data-intensive processing and fine-grained parallelism.
* **CPU**: Suitable for branch and branch operations, and coarse-grained parallelism.

It is essential to identify which parts of the code benefit from parallelization on the GPU and which must be processed sequentially on the CPU. 

We see therefore that the parallelism for which CUDA stands out is in data parallelism (_**data parallelism**_).

### 1.4. HardwareA GPU is made up of _N_ multiprocessors, each containing _M_ cores. Some of the GPU families from NVidia's Tesla family are shown in the following image.

Each multiprocessor has its own register bank, shared memory, a constant cache, and a texture cache (both read-only). In addition, it is equipped with a global memory of the GDDR type, which is three times faster than the CPU's main memory, although much slower than the shared memory of the SRAM type. Thread blocks in CUDA can be assigned to any multiprocessor for execution. The following image illustrates the structure of a GPU.

To illustrate, consider the Volta generation, specifically the GV100 GPU. This GPU features 84 multiprocessors (SMs) and 8 512-bit memory controllers. In the Volta architecture, each multiprocessor has 64 cores for int32 operations, 64 cores for float32, 32 cores for float64, and 8 tensor units.

From the image above, it can be seen that the design of a block is used as a basis for creating more complex designs by replicating it.


#### 1.4.1. Tensor Cores

Over the past decade, one of the components that has gained the most prominence has been tensor cores. Tensor cores are designed to perform high-speed matrix operations, which is crucial in the training of Artificial Intelligence models and in processes that involve extensive matrix operations. The following diagram illustrates the operation process of each tensor core per clock cycle.

#### 1.4.2. Numeric Precision

Data precision, such as moving from 32-bit integers to 16-bit integers, impacts the throughput of the system. Reducing the precision allows for a greater number of operations, but with lower precision in the results. Depending on the application, this reduction in precision may be acceptable. The throughput for different data precisions on modern GPU architectures is shown below.

## 2. CUDA Programming in C

### 2.1. Basic Concepts

In CUDA, a parallelized function is called a **Kernel**. To know the GPU and its characteristics, you can use the following command in a terminal on the computer to be used:

```bash
nvidia-smi
```

During CUDA programming, both the CPU and GPU perform operations simultaneously, so it is necessary to synchronize the execution times between both components.

Synchronization between the GPU and the CPU, as well as between different threads on the GPU, can make conditional statements such as `if` unfavorable for execution on the GPU. Therefore, it is recommended to minimize the use of conditional statements in a Kernel.

CUDA programming is done using C/C++ and CUDA files have the extension `.cu`. Compiling the code is done with the following command:

```bash
!nvcc -arch=sm_70 -o program_name_result.cu -run
```

In this command, `-arch=sm_70` specifies the architecture for compilation.

An example of CUDA code is presented below:

```c
// Include the standard library for input and output
#include <iostream>// Allows using the standard namespace without prefixing std::
using namespace std;

void hello_cpu(void)
{
// Print a message to the console from the CPU
printf("This is a hello from the CPU");
}

// Defines a kernel function that runs on the GPU
__global__ void kernel_example(void)
{
// Print a message to the console from the GPU
printf("Hello, this is running in parallel on GPU");
}

int main(void)
{
// Call the hello_cpu function to print the hello from the CPU
hello_cpu();

// Call the kernel function on the GPU with a single instance of a single thread
kernel_example<<<1, 1>>>();

// Wait for all threads on the GPU to finish before continuing
cudaDeviceSynchronize();

// Returns 0 to indicate that the program terminated successfully
return 0;
}
```

The `__global__` keyword indicates that the function runs on the GPU and can be called from the CPU. Code executed on the CPU is called ***host*** and code executed on the GPU is called ***device***. `__global__` functions must have type `void()`. Invoking a CUDA function uses the **execution configuration**, which has the following form: `function_name<<<x, y>>>`, where:

* `x` is the number of blocks, it must be less than 2048.
* `y` is the number of threads per block, it must be less than 1024.

The total number of threads is obtained by multiplying `x` by `y`. For example, with 2 blocks (`x = 2`) and 4 threads per block (`y = 4`), you get 8 threads in total. **The number of blocks and threads depends on the hardware capabilities of the GPU.**

The kernel code is executed in each thread of each block configured when the kernel is launched. A kernel with only one block will use only one GPU multiprocessor.

The `cudaDeviceSynchronize()` command ensures that the GPU completes its task before the CPU terminates the program, acting as a synchronization tool between the CPU and GPU.

CUDA can speed up loops in programming. For example, to increment a value `b` to `N` elements of a vector:

```c
void increment_on_cpu(float *a, float b, int N)
{
// Loop through each element of the array from 0 to N-1
for (int idx = 0; idx < N; idx++)
{
// Increment the value at position 'idx' in array 'a' by 'b'
a[idx] = a[idx] + b;
}
}

void main()
{
// ... (other possible initializations and settings)

// Calls the increment_on_cpu function to increment the elements of array 'a' on the CPU
increment_on_cpu(a, b, N);
}
```

The above loop is suitable for parallelization, since each index is independent and does not require a specific order (threads in a _warp_ are executed out of order).

#### 2.1.1. Identifying threads, blocks, and grids in a CUDA kernel

CUDA provides variables that describe threads, blocks, and grids:

| Function | Definition |
| --------------| -------------------------------------------------------------------- |
| `gridDim.x` | Total number of blocks in the grid. |
| `blockIdx.x` | Index of the current block within the grid. |
| `blockDim.x` | Number of threads in a block within the kernel. |
| `threadIdx.x` | Index of a thread within a block in the kernel. |

Blocks in the same kernel cannot communicate with each other during execution, since they can be executed in any order and independently.

The _kernel_ must do the work of a single iteration of the loop, so the _kernel_ configuration must be adjusted to the number of iterations of the loop, by setting both the number of blocks and the number of threads per block appropriately. The parallelized code for the loop is presented below:

```c// Kernel function to increment each element of array 'a' on GPU
__global__ void increment_on_gpu(float *a, float b, int N)
{
// Calculate the global index of the thread
int idx = blockIdx.x * blockDim.x + threadIdx.x;

// Check if the index is within the valid range
if (idx < N)
{
// Increment the value at position 'idx' of array 'a' by 'b'
a[idx] = a[idx] + b;
}
}

void main()
{
// ... (other possible initializations and configurations)

// Define the size of each thread block
dim3 dimBlock(blocksize);

// Calculate the number of blocks needed to cover all elements of the array
dim3 dimGrid(ceil(N / (float)blocksize));

// Call kernel function on GPU with block and thread configuration
gpu_increment<<<dimGrid, dimBlock>>>(a, b, N);
}
```

In the above code, each thread performs one iteration of the loop. The formula to map each thread to a loop index is:

$$
i_{x} = (blockIdx.x \cdot blockDim.x) + threadIdx.x
$$

It is important that `blockDim.x` is greater than or equal to 32, which is the size of the *warp*.

In cases where the number of threads exceeds the number of tasks, it must be ensured that the obtained index $i_{x}$ is less than the total number of data.

### 2.2. Memory allocation on GPU

Memory allocation and freeing is done for the CPU and GPU using the `malloc()` and `free()` functions on the CPU, and `cudaMallocManaged()` and `cudaFree()` on the GPU.

Example for CPU:

```c
// For CPU only

// Define the array size as 2^21
int N = 2 << 20;

// Calculate the total size in bytes of the array
size_t size = N * sizeof(int);

// Declare a pointer to the array
int *a;

// Allocate memory for the array on the CPU heap
a = (int *)malloc(size);

// Free up the memory allocated in the CPU heap
free(a);

// GPU and CUDA accelerated

// Set the array size to 2^21
int N = 2 << 20;

// Calculate the total size in bytes of the array
size_t size = N * sizeof(int);

// Declare a pointer to the array
int *a;

// Allocate unified memory for the array on the GPU and CPU
cudaMallocManaged(&a, size);

// Free up the unified memory
cudaFree(a);
```

Advances in hardware have improved the transfer rate between the CPU and GPU, as well as the memory characteristics of both components. Recent versions of CUDA allow the use of **unified memory**, which facilitates the exchange of data between the CPU and GPU.

Unified memory offers a number of advantages:

* It provides a single pointer to data accessible from both the CPU and GPU.
* It eliminates the need to use `cudaMemcpy()`.
* It facilitates code portability.
* It improves data transfer performance and ensures global data consistency. It also allows manual optimization with `cudaMemcpyAsync()`.

The types of memory in CUDA can be seen in the following image:

Unified memory has a few considerations:

* The maximum capacity of unified memory is limited by the smaller amount of memory available on GPUs.
* Unified memory used by the CPU must migrate back to the GPU before launching a _kernel_.
* The CPU cannot access unified memory while the GPU is executing a _kernel_; `cudaDeviceSynchronize()` must be called before the CPU accesses unified memory.* The GPU has exclusive access to unified memory while running a _kernel_, even if the _kernel_ does not use unified memory.

We can summarize the process of unified memory with the following image:

##### Unified Memory Usage Examples

Incorrect example:

```c
// Define a global unified memory variable accessible by both the CPU and GPU
__device__ __managed__ int x, y = 2;

__global__ void mykernel()
{
// Assign the value 10 to the variable 'x' on the GPU
x = 10;
}

int main()
{
// Call kernel function on GPU with a single instance of a single thread
mykernel <<<1, 1>>> ();

// ERROR: Concurrent access from CPU while GPU may be using variable 'y'
y = 20;

return 0;
}
```

Correct example:

```c
// Define a unified global memory variable accessible from CPU and GPU
__device__ __managed__ int x, y = 2;

__global__ void mykernel()
{
// Assign the value 10 to variable 'x' on GPU
x = 10;
}

int main()
{
// Call kernel function on GPU with a single instance of a single thread
mykernel <<<1, 1>>> ();

// Wait for all threads on the GPU to finish before continuing
cudaDeviceSynchronize();

// Assign the value 20 to the variable 'y' on the CPU, after the kernel has finished
y = 20;

return 0;
}
```

It is possible to clone structures without using unified memory, but this requires making successive copies between the CPU and GPU. It is also possible to do it with unified memory using C++.

### 2.4. Kernels with large data size

When working with an amount of data that exceeds the maximum number of available threads, it is necessary to split the data into smaller blocks that fit the number of threads. After completing the processing of one split, the next is moved on to using the expression:

$$
blockDim.x \cdot gridDim.x
$$

The following loop illustrates how to implement this technique:

```c
__global__ void kernel(int *a, int N)
{
// Calculate the global index of the thread within the grid
int indexWithinTheGrid = (blockIdx.x * blockDim.x) + threadIdx.x;

// Calculate the total size of the grid in terms of threads
int gridStride = blockDim.x * gridDim.x;

// Iterate through the data in steps of size 'gridStride' to ensure that all threads process parts of the array
for (int i = indexWithinTheGrid; i < N; i += gridStride)
{
// Code to process the data
}
}
```

### 2.5. Error Handling

CUDA functions often return a value indicating whether an error has occurred, making error handling easier. Here's how to handle errors when allocating memory:

```c
// Declare a variable to store the CUDA error code
cudaError_t err;

// Allocate unified memory for array 'a' on GPU and CPU
err = cudaMallocManaged(&a, N);

// Check the result of the memory allocation
if (err != cudaSuccess) 
{
// Print an error message if the allocation failed
printf("Error: %s\n", cudaGetErrorString(err)); 
}
```

For error handling when launching a kernel, `cudaGetLastError()` is used, which returns a value of type `cudaError_t`. For example:

```c
// -1 is not a valid value for the number of threads per block
someKernel<<<1, -1>>>();

// Declare a variable to store the CUDA error code
cudaError_t err;

// Get the last error that occurred in the CUDA API
err = cudaGetLastError();

// Check the result of the last error
if (err != cudaSuccess)
{
// Print an error message if a problem occurred
printf("Error: %s\n", cudaGetErrorString(err));
}
```

A helper function can also be used to check for errors:

```c
#include <stdio.h>
#include <assert.h>// Inline function to check for CUDA errors and report them if they occur
inline cudaError_t checkCuda(cudaError_t result)
{
// If the result is not cudaSuccess, print the error message and use assert to stop the program
if (result != cudaSuccess) 
{
fprintf(stderr, "CUDA Runtime Error: %s\n", cudaGetErrorString(result));
assert(result == cudaSuccess);
}

return result;
}

int main()
{
// Call checkCuda to handle errors from CUDA functions
checkCuda(all_functions_to_handle_errors);
}
```

### 2.6. Examples of characteristic/common kernels

Before exploring operators, a **forall_loop** must be defined:

> A forall_loop is a `for` loop with no dependencies between iterations, allowing the result to remain unchanged regardless of the starting index.

The most common types of operators are:

* **Streaming operators**: These represent the simplest form of a forall_loop. CUDA can use all the threads needed to process each pixel independently. Example:

```c
// Define the array size based on a 1920x1080 resolution
#define N 1920 * 1080

// Declare arrays for color and luminance components
float r[N], g[N], b[N], luminance[N];

// Calculate luminance for each pixel
for(int i = 0; i < N; i++)
{
// Calculate luminance using the relative luminance formula
luminance[i] = 255 * (0.2999 * r[i] + 0.587 * g[i] + 0.114 * b[i]);
}
```

* **Vector operators**: Each iteration of the loop can be assigned to a CUDA thread to maximize parallelism and scalability. Example:

```c
// Define the array size as 2^30
#define N (1 << 30)

// Declare arrays for vectors a, b, and c
float a[N], b[N], c[N];

// Add corresponding elements of arrays 'a' and 'b' and store the result in 'c'
for(int i = 0; i < N; i++)
{
c[i] = a[i] + b[i];
}
```

* **Stencil operators**: External iterations must be serialized due to dependencies, but parallelism at each particle can be exploited. The computational load depends on the number of iterations. Example:

```c
int i, j, iter, N, Niters; 

// Declare two 2-dimensional arrays to store input and output data
float in[N][N], out[N][N]; 

// Perform iteration over a fixed number of iterations
for (iter = 0; iter < Niters; iter++) 
{ 
// Calculate the average of the neighbors for each element in the array, excluding edges
for (i = 1; i < N - 1; i++)
{
for (j = 1; j < N - 1; j++)
{
out[i][j] = 0.2 * (in[i][j] + in[i-1][j] + in[i+1][j] + in[i][j-1] + in[i][j+1]); 
}
} 

// Copy the results computed in 'out' back to 'in' for the next iteration
for (i = 1; i < N - 1; i++)
{
for (j = 1; j < N - 1; j++)
{
in[i][j] = out[i][j];
} 
} 
}
```

Parallelism in this case is determined by the size of the 2D array ($$N^2$$).

* **Reduction operators**: Although the code has dependencies between iterations, parallelism can be deployed using a binary tree structure, resulting in $$\log(N)$$ steps that reduce the degree of parallelism down to a single thread. It is essential to use a memory access pattern that optimizes the GPU memory hierarchy. Example:

```c
// Declare a variable to store the sum and an array of numbers
float sum, x[N]; 

// Initialize the sum variable to 0
sum = 0; 

// Sum all elements of the array 'x'for (int i = 0; i < N; i++)
{
sum += x[i];
}
```

* **Histograms**: Example code to calculate histograms:

```c
// Declare an array for the histogram and a matrix for the image
int histo[Nbins], image[N][N]; 

// Initialize the histogram to 0 for all bins
for (int i = 0; i < Nbins; i++)
{
histo[i] = 0; 
}

// Calculate the histogram of the image
for (int i = 0; i < N; i++)
{
for (int j = 0; j < N; j++)
{
// Increment the counter in the bin corresponding to the image value
histo[image[i][j]]++;
}
}
```

The first `for` loop has low computational load. The following loops have dependencies, but can be read in parallel if assigned to CUDA threads. CUDA provides atomic operations (`atomicInc(histo[image[i][j]])`) to handle concurrent accesses to the `histo[]` vector and prevent race conditions.

As a final analysis we have:

* The streaming operator is the most efficient on GPUs.
* The pattern operator makes better use of shared memory.
* The reduction operator requires more programmer intervention.
* The histogram is the most challenging for the programmer.

## 3. Accelerating applications with CUDA in Python using Numba and CuPy

The performance of scientific and engineering applications in Python can be significantly improved by using tools such as Numba and CuPy. These technologies allow for parallelization and acceleration of code, taking advantage of the processing power of GPUs and overcoming the limitations of the Python interpreter.

### 3.1. Numba

#### 3.1.1. Introduction

Numba is a JIT (*Just-In-Time*) compiler for Python that accelerates code by converting functions into CPU- and GPU-optimized machine code. This bypasses the Python interpreter and allows efficient execution of numerical operations, especially those involving loops and intensive calculations. Compilation is performed at runtime, applying optimizations based on the input data.

However, Numba has certain limitations such as not being compatible with Pandas, so to use Numba with Pandas data, it is recommended to convert DataFrames to NumPy or CuPy arrays. For more information, see the [official Numba page](https://numba.pydata.org/).

#### 3.1.2. Decorators

Numba offers several decorators for compiling and optimizing functions:

| Decorator | Definition |
|-------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `@jit` | Compiles in object mode. Numba compiles optimizable loops to machine code and the rest of the function is executed by the Python interpreter. |
| `@njit` = `@jit(nopython=True)` | Compiles without the Python interpreter, giving the best performance. May fail if parameters are not supported; if it fails, it is recommended to use `@jit`. This is the preferred decorator for most cases. |
| `@njit(parallel=True)` | Compiles code to run in multiple threads, taking advantage of parallelization when operations allow it. || `@njit(fastmath=True)` | Enables fast mathematical calculations at the cost of reduced numerical precision, further speeding up performance. |

Decorators can be combined to optimize performance. For example:

```python
@njit(parallel=True, fastmath=True)
```

In this case, the Python interpreter (`njit`) is avoided, the code is parallelized (`parallel=True`), and lower numerical precision is allowed (`fastmath=True`) to maximize execution speed.

##### Example

Basic example of using Numba with the `@njit` decorator:

```python
from numba import njit
import numpy as np

@njit()
def loop(list1, list2, num_rows):
## Initialize an empty list to store the results
list3 = []

## Loop through each row
for row in range(num_rows):
## Check if the value in list1 is greater than or equal to 1 and the value in list2 is less than or equal to 5
if (list1[row] >= 1) and (list2[row] <= 5):
## Calculate the mean of the values ​​in list1 and list2 for that row and add it to list3
list3.append(np.mean([list1[row], list2[row]]))

return list3

list1 = np. array([1, 2, 3])
list2 = np. array([4, 5, 6])
result = loop(list1, list2, len(list1))
print(result)
```

In this example, the `@njit()` decorator compiles the function to run without the Python interpreter, greatly improving performance.

### 3.2. CuPy

#### 3.2.1. Introduction

CuPy is a Python library designed to accelerate numerical calculations by running code on GPUs. It offers a NumPy-like API, allowing similar operations to be performed by leveraging the CUDA architecture to improve performance. It is useful for tasks involving large volumes of data or intensive calculations.

For more information, see the [CuPy official page](https://cupy.dev/).

#### 3.2.2. Basic CuPy Usage

CuPy offers a NumPy-like API, making it easy to transition between the two libraries. Here is a basic example of how to perform calculations on a GPU using CuPy:

```python
import cupy as cp

## Create arrays on the GPU
a = cp.array([1, 2, 3, 4, 5])
b = cp.array([6, 7, 8, 9, 10])

## Perform operations
c = a + b

## Convert back to NumPy if needed
c_numpy = cp.asnumpy(c)

print(c_numpy) ## Output: [ 7 9 11 13 15]
```

### 3.3. Comparison between Numba and CuPy

- **Numba**: Ideal for speeding up specific functions and loops in Python. Allows JIT compilation for CPUs and GPUs, and integrates well with existing NumPy code. Recommended for optimizing complex mathematical algorithms and simulations with loop structures that can benefit from JIT compilation.

- **CuPy**: Best for working with matrices and performing large-scale operations on GPUs. Offers a NumPy-like API, making it easy to port code and taking advantage of CUDA hardware. Suitable for tasks involving intensive matrix calculations, such as training machine learning models, image processing, and data-intensive simulations.