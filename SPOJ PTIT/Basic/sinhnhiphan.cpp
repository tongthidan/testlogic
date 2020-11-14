#include<iostream>
#include<math.h>
using namespace std;
int n, a[10];
void sinh(int i){
	if( i < n){
		for(int j = 0 ; j <= 1; j++){
			a[i] = j;
			sinh(i+1);
		}
	}
	else{
		for(int i = 0; i < n; i++){
			cout<<a[i];
		}
		cout<<endl;
	}
}
main(){

	cin>>n;
	for(int i = 0; i < n; i++){
		a[i] =  0;
	}
	sinh(0);
	
	return 0;
}

