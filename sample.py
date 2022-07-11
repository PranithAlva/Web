#100 days of code
def fact(n):
    if n ==1:
        return 1
    return n*fact(n-1)
print("hello world")

print("Fibonacci series of a number")
n=int(input("Enter the number"))
prev=0
cur=1
print(prev)
print(cur)
for i in range (1,n-1):
    sum=prev+cur
    print(sum)
    prev=cur
    cur=sum
print(fact(5))
