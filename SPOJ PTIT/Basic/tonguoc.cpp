#include<iostream>
#include<math.h>
using namespace std;
long long n;
int checkcp(long long n){
	long long s = sqrt(n);
	if(s *s == n){
		return 1;
	}
	return 0;
}
long long tong(long long n){
	long long sum = 0;

	for(int i = 1; i < sqrt(n); i++){
		if( n% i == 0 ){
			sum += i;
			sum += n/i;
		}
	}
	if( checkcp(n) == 1 ){
		sum += sqrt(n);
	}
	return sum ;
}
main(){
	int t;
	cin>>t;
	while(t--){
		cin>>n;
		long long sum = tong(n);
		cout<<sum<<endl;
	}
	return 0;
}

