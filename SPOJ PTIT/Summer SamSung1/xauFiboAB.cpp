#include<iostream>
#include<math.h>
using namespace std;
int n, k;
long long Fibo[95];
char Fibonacia(int n, long long i){
	if(n == 1)	return 'A';
	if(n == 2)	return 'B';
	if(i <= Fibo[n-2])	return Fibonacia(n-2,i);
	return Fibonacia(n-1,i - Fibo[n-2]);
}
main(){
	
	Fibo[1] = 1;
	Fibo[2] = 1;
	for(int i = 3; i <= 92; i++){
		Fibo[i] = Fibo[i-2] + Fibo[i-1]; 
	}
	int t;
	int n;
	long long i;
	cin>>t;
	while(t--){
		cin>>n>>i;
		cout<<Fibonacia(n,i)<<endl;
		
	}
	return 0;
}

