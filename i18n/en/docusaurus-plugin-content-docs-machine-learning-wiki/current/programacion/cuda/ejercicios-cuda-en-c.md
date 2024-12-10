---
sidebar_position: 2
authors:
  - name: Daniel Bazo Correa
description: Ejercicios de CUDA en C.
title: Ejercicios de CUDA en C
toc_max_heading_level: 4
---
## Basic exercises

### Order of execution

<details>
<summary>
Example
</summary>

In this code we will show how to execute the function first on the GPU, and then on the CPU.

```c
#include <stdio.h>

void helloCPU()
{
printf("Hello from the CPU.\n");
}

__global__ void helloGPU()
{
printf("Hello from the GPU.\n");
}

int main()
{
int num_blocks = 1;
int num_block_threads = 1;

helloGPU<<<num_blocks, num_block_threads>>>();

cudaDeviceSynchronize();

helloCPU();

return 0;
}
```

In this other case, it will be executed first on the CPU and then on the GPU.

```c
#include <stdio.h>

void helloCPU()
{
printf("Hello from the CPU.\n");
}

__global__ void helloGPU()
{
printf("Hello from the GPU.\n");
}

int main()
{
int num_blocks = 1;
int num_block_threads = 1;

helloGPU<<<num_blocks, num_block_threads>>>();

cudaDeviceSynchronize();

helloCPU();

helloGPU<<<num_blocks, num_block_threads>>>();

cudaDeviceSynchronize();

return 0;
}
```

</details>

### Running threads and blocks in a Kernel

<details>
<summary>
Example
</summary>

In this first example, we are going to run 5 threads in a single block for a Kernel.

```c
#include <stdio.h>

__global__ void firstParallel()
{
/*
You should see the output printed 5 times
*/
printf("Parallelism.\n");
}

int main()
{
int num_blocks = 1;
int num_block_threads = 5;

firstParallel<<<num_blocks, num_block_threads>>>();

cudaDeviceSynchronize();

return 0;
}
```

In this other example, we are going to run 5 threads in 5 different blocks of the same Kernel.

```c
#include <stdio.h>

__global__ void firstParallel()
{
/*
You should see the output message printed 25 times
*/
printf("Parallelism.\n");
}

int main()
{
int num_blocks = 5;
int num_threads_blocks = 5;

firstParallel<<<num_blocks, num_threads_blocks>>>();

cudaDeviceSynchronize();

return 0;
}
```

</details>

### Use thread- and block-specific indexes in a Kernel

<details>
<summary>
Example
</summary>

```c
#include <stdio.h>

__global__ void printSuccessForCorrectExecutionConfiguration()
{

    if(threadIdx.x == 1023 && blockIdx.x == 255)
    {
        printf("Success!\n");
    }
}

int main()
{
    int num_blocks = 256;
    int num_block_threads = 1024;

    printSuccessForCorrectExecutionConfiguration<<<num_blocks, num_threads_block>>>();
    
    cudaDeviceSynchronize();
    
    return 0;
}
```
</details>

### Speeding up a loop with a single thread block

<details>
<summary>
Example
</summary>

```c
#include <stdio.h>

__global__ void loop(int N)
{ 
int i = (blockIdx.x * blockDim.x) + threadIdx.x;

if(i < N)
{
printf("This is iteration number %d\n", i);
}
}

int main()
{
int N = 10;

int num_blocks = 1;
int num_block_threads = N;

loop<<<num_blocks, num_block_threads>>>(N);

cudaDeviceSynchronize();

return 0;
}
```

</details>

### Speeding up a loop with multiple thread blocks

<details>
<summary>
Example
</summary>

```c
#include <stdio.h>

__global__ void loop(int N)
{
    int i = (blockIdx.x * blockDim.x) + threadIdx.x;
    
    if(i < N)
    {
        printf("This is iteration number %d\n", i);
    }
}

int main()
{
    int N = 10;
    
    int num_blocks = 2;
    int num_block_threads = N/num_blocks;
    
    loop<<<num_blocks, num_threads_block>>>(N);
    
    cudaDeviceSynchronize();
    
    return 0;
}
```
</details>

### Array manipulation on the *host* and *device*

<details>
<summary>
Example
</summary>

```c
#include <stdio.h>

void init(int *a, int N)
{
    int i
    
    for (i = 0; i < N; ++i)
    {
        a[i] = i;
    }
}

__global__ void doubleElements(int *a, int N)
{
    int i = (blockIdx.x * blockDim.x) + threadIdx.x;
    
    if (i < N)
    {
        a[i] *= 2;
    }
}bool checkElementsAreDoubled(int *a, int N)
{
int i

for (i = 0; i < N; ++i)
{
if (a[i] != i*2) return false;
}

return true;
}

int main()
{

int N = 100
int *a;

size_t size = N * sizeof(int);

/*
* Refactor this memory allocation to provide an `a` pointer that can be used on both the host and the device.
*/

//a = (int *)malloc(size);
cudaMallocManaged(&a, size);

init(a, N);

size_t threads_per_block = 10;
size_t number_of_blocks = 10;

/*
* This cast will not work until the `a` pointer is also available on the device.
*/

doubleElements<<number_of_blocks, threads_per_block>>(a, N);
cudaDeviceSynchronize();

bool areDoubled = checkElementsAreDoubled(a, N);
printf("Have all elements been doubled? %s\n", areDoubled ? "TRUE" : "FALSE");

cudaFree(a);

return 0; 
}
```
</details>

### Speeding up a loop with mismatched execution configuration

<details>
<summary>
Example
</summary>

```c
#include <stdio.h>

/*
* Currently, `initializeElementsTo`, if executed in a thread whose
* `i` is calculated to be greater than `N`, will attempt to access a value
* outside the range of `a`.
*
* Refactor the kernel definition to prevent out-of-range accesses.
*/

__global__ void initializeElementsTo(int initialValue, int *a, int N)
{
int i = threadIdx.x + blockIdx.x * blockDim.x;

if(i < N)
{
a[i] = initialValue;
}
}

int main()
{
int N = 1000

int *a;
size_t size = N * sizeof(int);

cudaMallocManaged(&a, size);

/*
* Suppose we have reason to want the number of threads
* fixed at 256
*/
size_t threads_per_block = 256;

/*
* Assign a value of blocks that allows
* a working execution configuration given the fixed values ​​for
* `N` and threads. */
size_t number_of_blocks = (N + threads_per_block - 1) / threads_per_block;

int initialValue = 6;

initializeElementsTo<<number_of_blocks, threads_per_block>>(initialValue, a, N);
cudaDeviceSynchronize();

/*
* Checks that all values ​​in `a`, were initialized.
*/
for (int i = 0; i < N; ++i)
{
if(a[i] != initialValue)
{
printf("FAILURE: target value: %d\t a[%d]: %d\n", initialValue, i, a[i]);
cudaFree(a);
exit(1);
}
}

printf("Success!\n");

cudaFree(a);

return 0;
}
```
</details>

### Using a *Grid-Stride* loop to manipulate an array larger than the blocks grid

<details>
<summary>
Example
</summary>

```c
#include <stdio.h>

void init(int *a, int N)
{
int i

for (i = 0; i < N; ++i)
{
a[i] = i;
}
}

/*
* In the current application, `N` is larger than the grid.
* Refactor this kernel to use a grid-stride loop so that
* each parallel thread works on more than one element of the array.
*/

__global__ void doubleElements(int *a, int N)
{
int i = blockIdx.x * blockDim.x + threadIdx.x;
int gridStride = gridDim.x * blockDim.x;
    
    for (int j = i; j < N; j += gridStride)
    {
        a[j] *= 2;
    }

}

bool checkElementsAreDoubled(int *a, int N)
{
    for (int i = 0; i < N; ++i)
    {
        if (a[i] != i*2) return false;
    }
    
    return true;
}

int main()
{

    /*
    * `N` is greater than the grid size (see below).
    */

    int N = 10000;
    int *a;

    size_t size = N * sizeof(int);
    cudaMallocManaged(&a, size);

    init(a, N);

    /*
* The size of this grid is 256*32 = 8192.
*/

size_t threads_per_block = 256;
size_t number_of_blocks = 32;

doubleElements<<number_of_blocks, threads_per_block>>(a, N);
cudaDeviceSynchronize();

bool areDoubled = checkElementsAreDoubled(a, N);printf("Have all elements been duplicated? %s\n", areDoubled ? "TRUE" : "FALSE");

    cudaFree(a);
    
    return 0;
}
```
</details>

### Error handling

<details>
<summary>
Example
</summary>

```c
#include <stdio.h>

void init(int *a, int N)
{
    for (int i = 0; i < N; ++i)
    {
        a[i] = i;
    }
}

__global__ void doubleElements(int *a, int N)
{
    int idx = blockIdx.x * blockDim.x + threadIdx.x;
    int stride = gridDim.x * blockDim.x;

    for (int i = idx; i < N + stride; i += stride)
{
a[i] *= 2;
}
}

bool checkElementsAreDoubled(int *a, int N)
{
for (int i = 0; i < N ; ++i)
{
if (a[i] != i*2) return false;
}

return true;
}

int main()
{
/*
* Add error handling to this source code to know what errors
* exist, and then fix them. Googling error messages may be
* helpful if the actions to resolve them are not clear to you.
*/

cudaError_t error_manager;

int N = 10000
int *a;

size_t size = N * sizeof(int);
error_manager = cudaMallocManaged (&a, size);

if(error_manager != cudaSuccess)
{
printf("There was an error in the memory allocation\n");
printf("Error obtained: %s\n", cudaGetErrorString(error_manager));
}

init(a, N); size_t threads_per_block = 2048;
size_t number_of_blocks = 32;

doubleElements<<number_of_blocks, threads_per_block><>(a, N);

error_manager = cudaGetLastError();

if (error_manager != cudaSuccess)
{
printf("Error in kernel launch\n ");
printf("Error obtained: %s\n", cudaGetErrorString(error_manager));
}

error_manager = cudaDeviceSynchronize();

if(error_manager != cudaSuccess)
{
printf("There was an error in synchronization\n");
printf("Error obtained: %s\n", cudaGetErrorString(error_manager));
}

bool areDoubled = checkElementsAreDoubled(a, N);
printf("Are all elements duplicated? %s\n", areDoubled ? "TRUE" : "FALSE");

cudaFree(a);

return 0;
}
```

The error obtained is the following: **invalid configuration argument**

And we see that it is the Kernel configuration where the number of threads per block exceeds the maximum of 1 Giga-Block. So you have to change to the maximum allowed:

```c
size_t threads_per_block = 1024;
```

</details>

### Speed ​​up vector addition

<details>
<summary>
Example
</summary>

```c
#include <stdio.h>
#include <assert.h>

inline cudaError_t checkCuda(cudaError_t result)
{
    if (result != cudaSuccess) 
    {
        fprintf(stderr, "CUDA Runtime Error: %s\n", cudaGetErrorString(result));
        assert(result == cudaSuccess);
    }

    return result;
}

void initWith(float num, float *a, int N)
{
    for(int i = 0; i < N; ++i)
    {
        a[i] = num;
    }
}

__global__ void addVectorsInto(float *result, float *a, float *b, int N)
{
    int i = (blockIdx.x * blockDim.x) + threadIdx.x;
    int gridStride = gridDim.x * blockDim.x;
    
    for (int j = i; j < N; j += gridStride)
    {
        result[j] = a[j] + b[j];
    }
}

void checkElementsAre(float target, float *array, int N)
{
    for(int i = 0; i < N; i++)
    {
        if(array[i] != target)
        {
            printf("FAIL: array[%d] - %0.0f is not equal to %0.0f\n", i, array[i], target);
            exit(1);
        }
    }
    
    printf("SUCCESS! All values ​​added successfully.\n");
}

int main()
{
    const int N = 2<<20; // 2 ^21 = 2097152
    size_t size = N * sizeof(float);

    float *a, *b, *c;
    
    checkCuda(cudaMallocManaged(&a, size));
    checkCuda(cudaMallocManaged(&b, size));
    checkCuda(cudaMallocManaged(&c, size));

initWith(3, a, N);
initWith(4, b, N);
initWith(0, c, N);

int num_block_threads = 1024;
int num_blocks = (N + num_block_threads - 1) /num_threads_block;addVectorsInto<<num_blocks, num_block_threads><>(c, a, b, N);

checkCuda(cudaGetLastError());
checkCuda(cudaDeviceSynchronize());

// Check elements on CPU
// If we do cudaDeviceSynchronize() afterwards it will give an error in the check
// of the data
checkElementsAre(7, c, N);

checkCuda(cudaFree(a));
checkCuda(cudaFree(b));
checkCuda(cudaFree(c));

return 0;
}
```
</details>

### Speed ​​up 2D matrix multiplication

<details>
<summary>
Example
</summary>

```c
#include <stdio.h>

#define N 64

__global__ void matrixMulGPU( int * a, int * b, int * c )
{
    int val = 0;
    
    int row = (blockDim.x * blockIdx.x) + threadIdx.x;
    int col = (blockDim.y * blockIdx.y) + threadIdx.y;
    
    if(row < N && col < N)
    {
        for (int k = 0; k < N; ++k )
        {
            val += a[row * N + k] * b[k * N + col];
            c[row * N + col] = val;
        }
    }
}

void matrixMulCPU(int * a, int * b, int * c )
{
    int val = 0;

    for( int row = 0; row < N; ++row )
    {
        for( int col = 0; col < N; ++col )
        {
            val = 0;
            
            for (int k = 0; k < N; ++k )
            {
                val += a[row * N + k] * b[k * N + col];
                c[row * N + col] = val;
            }
}
}
}

int main()
{
// Allocate a solution array for CPU and GPU operations
int *a, *b, *c_cpu, *c_gpu; 

// Number of bytes in an N x N array
int size = N * N * sizeof (int); 

// Allocate memory
cudaMallocManaged (&a, size);
cudaMallocManaged (&b, size);
cudaMallocManaged (&c_cpu, size);
cudaMallocManaged (&c_gpu, size);

// Initialize memory; create 2D arrays
for( int row = 0; row < N; ++row )
{
for( int col = 0; col < N; ++col )
{
a[row*N + col] = row;
b[row*N + col] = col+2;
c_cpu[row*N + col] = 0;
c_gpu[row*N + col] = 0;
}
}

/*
* Assigns the 2D values ​​`threads_per_block` and `number_of_blocks`
* which can be used in matrixMulGPU above.
*/

// dim3 allows you to define the number of blocks per grid and threads per block.
/*
Using a multidimensional block means that you have to be careful in distributing 
this number of threads across all dimensions. In a 1D block, you can set 1024 threads 
as maximum on the x axis, but in a 2D block, if you set 2 as the y size, 
you cannot exceed 512 (1024/2 = 512) for the x! For example, dim3 threadsPerBlock(1024, 1, 1) is allowed,
as is dim3 threadsPerBlock(512, 2, 1), but not dim3 threadsPerBlock(256, 3, 2).
*/
int x1 = N/2;
int y1 = N/2;

int x2 = 2
int y2 = 2;

dim3 threads_per_block (x1, y1, 1);
dim3 number_of_blocks (x2, y2, 1);

matrixMulGPU <<< number_of_blocks, threads_per_block >>> ( a, b, c_gpu );

cudaDeviceSynchronize();

// Call the CPU version to check our work
matrixMulCPU( a, b, c_cpu );

// Compare the two responses to make sure they are equal
bool error = false;
for( int row = 0; row < N && !error; ++row )
{
for( int col = 0; col < N && !error; ++col )
{
if (c_cpu[row * N + col] != c_gpu[row * N + col])
{
printf("ERROR FOUND in c[%d][%d]\n", row, col);
error = true;
break;
}
}
}

if (!error)
{
printf("Success!\n");
}

// Free all allocated memory
cudaFree(a); 
cudaFree(b);
cudaFree(c_cpu); 
cudaFree(c_gpu);
}
```
</details>

### Speeding up a thermal conductivity application

<details>
<summary>
Example
</summary>

```c
#include <stdio.h>
#include <math.h>
#include <assert.h>

inline cudaError_t checkCuda(cudaError_t result)
{
    if (result != cudaSuccess) 
    {
        fprintf(stderr, "CUDA Runtime Error: %s\n", cudaGetErrorString(result));
        assert(result == cudaSuccess);
    }

    return result;
}

// Simple definition for indexing into a 1D array from a 2D space
#define I2D(num, c, r) ((r)*(num)+(c))

/*
* `step_kernel_mod` is actually a direct copy of CPU Benchmark Example
* `step_kernel_ref` below. Speed ​​it up to run as a CUDA kernel.
*/

__global__ void step_kernel_mod(int ni, int nj, float fact, float* temp_in, float* temp_out)
{
int i00 , im10, ip10, i0m1, i0p1;
float d2tdx2, d2tdy2;

int j = ((blockIdx.x * blockDim.x) + threadIdx.x) + 1;
int i = ((blockIdx.y * blockDim.y) + threadIdx.y) + 1;
    
    if((j < nj - 1 && i < ni-1))
    {
        // find indexes in linear memory
        // for the center point and the neighbors
        i00 = I2D(ni, i, j);
        im10 = I2D(ni, i-1, j);
        ip10 = I2D(ni, i+1, j);
        i0m1 = I2D(ni, i, j-1);
        i0p1 = I2D(ni, i, j+1);

        // evaluate derivatives
        d2tdx2 = temp_in[im10]-2*temp_in[i00]+temp_in[ip10];
        d2tdy2 = temp_in[i0m1]-2*temp_in[i00]+temp_in[i0p1];

        // update temperatures
        temp_out[i00] = temp_in[i00]+fact*(d2tdx2 + d2tdy2);
    }
}

void step_kernel_ref(int ni, int nj, float fact, float* temp_in, float* temp_out)
{
    int i00, im10, ip10, i0m1, i0p1;
    float d2tdx2, d2tdy2;

    // loop over all points in the domain (except the boundary)
    for ( int j=1; j < nj-1; j++ ) 
    {
        for ( int i=1; i < ni-1; i++ ) 
        {
            // find indexes in linear memory
            // for the center point and the neighbors
            i00 = I2D(ni, i, j);
            im10 = I2D(ni, i-1, j);
            ip10 = I2D(ni, i+1, j);
            i0m1 = I2D(ni, i, j-1);
            i0p1 = I2D(ni, i, j+1);

            // evaluate derivatives
            d2tdx2 = temp_in[im10]-2*temp_in[i00]+temp_in[ip10];
            d2tdy2 = temp_in[i0m1]-2*temp_in[i00]+temp_in[i0p1];

            // update temperatures
            temp_out[i00] = temp_in[i00]+fact*(d2tdx2 + d2tdy2);
        }
    }
}

int main()
{   
    int isstep
    int nstep = 200; // number of time steps

// Specify our 2D dimensions
const int ni = 200
const int nj = 100
float tfac = 8.418e-5; // thermal diffusivity of silver

float *temp1_ref, *temp2_ref, *temp1, *temp2, *temp_tmp;

const int size = ni * nj * sizeof(float);

checkCuda(cudaMallocManaged(&temp1_ref, size));
checkCuda(cudaMallocManaged(&temp2_ref, size));
checkCuda(cudaMallocManaged(&temp1, size));
checkCuda(cudaMallocManaged( &temp2, size));

// Initialize with random data
for( int i = 0; i < ni*nj; ++i) 
{
temp1_ref[i] = temp2_ref[i] = temp1[i] = temp2[i] = (float)rand() /(float)(RAND_MAX/100.0f);
}

// Run the CPU-only reference version
for (istep=0; istep < nstep; istep++) 
{
step_kernel_ref(ni, nj, tfac, temp1_ref, temp2_ref);

// swap temperature pointers
temp_tmp = temp1_ref;
temp1_ref = temp2_ref;
temp2_ref= temp_tmp;
}

dim3 num_block_threads(32, 32, 1);
dim3 mesh(4, 7, 1);
//dim3 num_block_threads(128, 224, 1);
//dim3 mesh(1, 1, 1);

// Run the modified version using the same data
for (istep=0; istep < nstep; istep++) 
{
step_kernel_mod<<mesh, num_block_threads><>>(ni, nj, tfac, temp1, temp2);

checkCuda(cudaGetLastError());
checkCuda(cudaDeviceSynchronize());

// swap temp pointers temp_tmp = temp1;
temp1 = temp2;
temp2= temp_tmp;}

float maxError = 0;

// Output should always be stored in temp1 and temp1_ref at this point
for( int i = 0; i < ni*nj; ++i ) 
{
if (abs(temp1[i]-temp1_ref[i]) > maxError)
{ 
maxError = abs(temp1[i]-temp1_ref[i]); 
}
}

// Check if our maxError is greater than an error limit
if (maxError > 0.0005f)
{
printf("Problem! The Max Error of %.5f is NOT within acceptable limits.\n", maxError);
}
else
{
printf("The maximum error of %.5f is within acceptable limits;)
}

checkCuda(cudaFree(temp1_ref));
checkCuda(cudaFree(temp2_ref));
checkCuda(cudaFree(temp1));
checkCuda(cudaFree(temp2));

return 0;
}
```
</details>

## Advanced exercises

### Profiling an application with nsys

We can use the command `!nsys profile --stats=true ./kernel` to obtain information about the kernel. Among the information provided, there is the average execution time of the kernel so it would be very useful to make evaluations of the best allocation of blocks and threads for the specific problem.

### Optimization

For example, if we have data with sizes of $$2^{24} = 2^{25} = 2^{10} \cdot 2^{10} \cdot 2^{5}$$, we can have a maximum of 1024 threads per block, leaving $$2^{15}$$ threads that we will distribute forming $$2^{25}/1024 = 32768$$ blocks. In total we would have $$1024 \cdot 32768 = 33554432$$ total threads.

#### Check GPU specifications

<details>
<summary>
Example
</summary>

```c
#include <stdio.h>

int main()
{
int deviceId;

cudaGetDevice(&deviceId);

cudaDeviceProp props;
cudaGetDeviceProperties(&props, deviceId);

printf("Graph name: %s\n", props. name);
printf("Graph warp size: %d\n", props. warpSize);
printf("Total number of threads per block: %d\n", props. maxThreadsPerBlock);
printf("Total number of SMs: %d\n", props. multiProcessorCount);

return 0;
}
```
</details>

#### Optimize vector summation with grids sized by the number of GPU SMs

<details>
<summary>
Example
</summary>

```c
#include <stdio.h>

/*
* Host function to initialize the elements of the vector. This function
* simply initializes each element to match its index in the
* vector. */

void initWith(float num, float *a, int N)
{
for(int i = 0; i < N; ++i)
{
a[i] = num;
}
}

/*
* The device core stores in `result` the sum of each
* value with the same index of `a` and `b`.
*/

__global__ void addVectorsInto(float *result, float *a, float *b, int N)
{
int index = threadIdx.x + blockIdx.x * blockDim.x;
int stride = blockDim.x * gridDim.x;

for(int i = index; i < N; i += step)
{
result[i] = a[i] + b[i];
}
}

/*
* Host function to confirm values ​​in `vector`. This function
* assumes that all values ​​are the same `target` value.
*/

void checkElementsAre(float target, float *vector, int N)
{
for(int i = 0; i < N; i++)
{
if(vector[i] != target)
{
printf("FAIL: vector[%d] - %0.0f does not equal %0.0f\n", i, vector[i], target);
exit(1);
}
}

printf("Success! All values ​​calculated correctly.\n");
}

int main()
{
const int N = 2<<24;
size_t size = N * sizeof(float);

float *a
float *b
float *c;

cudaMallocManaged(&a, size);
cudaMallocManaged(&b, size);
cudaMallocManaged(&c, size);

initWith(3, a, N);
initWith(4, b, N);
initWith(0, c, N);

size_t threadsPerBlock;
size_t numberOfBlocks;

/*
* nsys should record performance changes when the runtime configuration
* is updated.
*/

int deviceID;
cudaGetDevice(&deviceID);

cudaDeviceProp props;
cudaGetDeviceProperties(&props, deviceID);

threadsPerBlock = props.maxThreadsPerBlock;numberOfBlocks = (N/threadsPerBlock) + 1;

    cudaError_t addVectorsErr;
    cudaError_t asyncErr;

    addVectorsInto<<numberOfBlocks, threadsPerBlock><>>(c, a, b, N);

    addVectorsErr = cudaGetLastError();
    if(addVectorsErr != cudaSuccess)
    {
        printf("Error: %s\n", cudaGetErrorString(addVectorsErr));
    }
    
    asyncErr = cudaDeviceSynchronize();
    if(asyncErr != cudaSuccess) 
    {
        printf("Error: %s\n", cudaGetErrorString(asyncErr));
    }

checkElementsAre(7, c, N);

cudaFree(a);
cudaFree(b);
cudaFree(c);
}
```
</details>

#### Prefetch/memory preload

<details>
<summary>
Example
</summary>

By using memory prefetching, we get fewer memory transfers but with more content as well as a reduction in the Kernel execution time.

```c
#include <stdio.h>

/*
* Host function to initialize the elements of the vector. This function
* simply initializes each element to match its index in the
* vector.
*/

__global__ void initWith(float num, float *a, int N)
{
int i = (blockDim.x * blockIdx.x) + threadIdx .x;

if(i < N)
{
a[i] = num;
}
}

/*
* The device core stores in `result` the sum of each
* value with the same index of `a` and `b`.
*/

__global__ void addVectorsInto(float *result, float *a, float *b, int N)
{
int index = threadIdx.x + blockIdx.x * blockDim.x;
int stride = blockDim.x * gridDim.x;

for(int i = index; i < N; i += step)
{
result[i] = a[i] + b[i];
}
}

/*
* Host function to confirm values ​​in `vector`. This function
* assumes that all values are the same `target` value.
*/

void checkElementsAre(float target, float *vector, int N)
{
    for(int i = 0; i < N; i++)
    {
        if(vector[i] != target)
        {
            printf("FAIL: vector[%d] - %0.0f is not equal to %0.0f\n", i, vector[i], target);
            exit(1);
        }
    }
    printf("Success! All values ​​calculated correctly.\n");
}

int main()
{
    int deviceID;
    cudaGetDevice(&deviceID);
    
    const int N = 2<<24;
    size_t size = N * sizeof(float);

    float *a, *b, *c;

    cudaMallocManaged(&a, size);
    cudaMallocManaged(&b, size);
    cudaMallocManaged(&c, size);
    
    cudaMemPrefetchAsync(a, size, deviceID);
cudaMemPrefetchAsync(b, size, deviceID);
cudaMemPrefetchAsync(c, size, deviceID);

initWith<< 32768, 1024><>>(3, a, N);
initWith<< 32768, 1024><>>(4, b, N);
initWith<< 32768, 1024><>>(0, c, N);

size_t threadsPerBlock;
size_t numberOfBlocks;

/*
* nsys should record performance changes when configuring execution
* is updated.
*/

cudaDeviceProp props;
cudaGetDeviceProperties(&props, deviceID);

threadsPerBlock = props.maxThreadsPerBlock;
numberOfBlocks = (N/threadsPerBlock) + 1;

    cudaError_t addVectorsErr;
    cudaError_t asyncErr;

    addVectorsInto<<numberOfBlocks, threadsPerBlock><>>(c, a, b, N);

    addVectorsErr = cudaGetLastError();
    if(addVectorsErr != cudaSuccess)
    {
        printf("Error: %s\n", cudaGetErrorString(addVectorsErr));
    }
    
    asyncErr = cudaDeviceSynchronize();
    if(asyncErr != cudaSuccess) 
    {
        printf("Error: %s\n", cudaGetErrorString(asyncErr));
    }
    
    cudaMemPrefetchAsync(c, size, cudaCpuDeviceId);
    
    checkElementsAre(7, c, N);

    cudaFree(a);
    cudaFree(b);
    cudaFree(c);
}
```
</details>