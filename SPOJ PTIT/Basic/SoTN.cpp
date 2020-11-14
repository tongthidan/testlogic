#include<iostream>
#include<math.h>
using namespace std;

main(){
	long n, t;
	cin>>t;
	while(t--){
		cin>>n;
		long sodao = 0, tmp = n;
		while( n > 0){
			sodao = sodao * 10 + n % 10;
			n = n/10; 
		}
		if( tmp == sodao){
			cout<<"YES"<<endl;
		}
		else{
			cout<<"NO"<<endl;
		}
	}
	
	return 0;
}

