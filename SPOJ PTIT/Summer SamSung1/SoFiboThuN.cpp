#include<bits/stdc++.h>
#include<math.h>
#define M 1000000007
using namespace std;
long long  soFibo(int n){
	if(n == 1||  n == 2)	return 1;
	else{
		long long f1 = 1, f2 = 1, fn;
		for(int i = 3; i <= n; i++){
			fn = f1 + f2;
			f1 = f2;
			f2 = fn;
		}
		return fn;
	}
}
main(){
	int t;
	cin>>t;
	long long n;
	while(t--){
		cin>>n;
		long long F = soFibo(n) % M;
		cout<<F<<endl;
	}
	return 0;
}

