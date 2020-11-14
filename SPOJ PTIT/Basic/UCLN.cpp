#include<iostream>
#include<math.h>
using namespace std;
long long UCLN(long long a, long long b){
	if(a == 0 || b == 0){
		return a+b;
	}
	while(b != 0){
		int t = b;
		b = a % b;
		a = t;
	}
	return a;
}
long long BCNN(long long a, long long b){
	return a*b/UCLN(a,b);
}
main(){
	while(1){
		long long a,b;
		cin>> a>>b;
		if(a == 0 && b == 0){
			break;
		}
		else{
			cout<<UCLN(a,b)<<" "<<BCNN(a,b)<<endl;
		}
	}
	return 0;
}

